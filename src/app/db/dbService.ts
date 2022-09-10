import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { Course } from '../logic/courseTypes';

@Injectable()
export class DbService {
  private courses: Course[] = [];
  private dbSub: Subscription;
  coursesChanged = new Subject<Course[]>();

  constructor(private db: AngularFirestore, private authService: AuthService) {}

  fetchCourses() {
    const user = this.authService.getUser();
    if (user) {
      const { uid } = user;
      this.dbSub = this.db
        .collection('users')
        .doc(uid)
        .collection('courses')
        .snapshotChanges()
        .pipe(
          map((docArray) =>
            docArray.map(({ payload: { doc } }) => ({
              id: doc.id,
              ...(doc.data() as Course),
            }))
          )
        )
        .subscribe((courses: Course[]) => {
          this.courses = courses;
          this.coursesChanged.next([...this.courses]);
        });
    }
  }

  addCourse(course: Course) {
    const user = this.authService.getUser();
    if (user) {
      const { uid } = user;
      this.db.collection('users').doc(uid).collection('courses').add(course);
    }
  }

  clearData() {
    if (this.dbSub) {
      this.dbSub.unsubscribe();
    }
    this.courses = [];
    this.coursesChanged.next([...this.courses]);
  }
}
