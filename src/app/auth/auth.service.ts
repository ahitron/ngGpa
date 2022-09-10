import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subject, Subscription } from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';
import { User } from './user';

@Injectable()
export class AuthService {
  private authStateSub: Subscription;
  private user: User;
  authChange = new Subject<User>();

  constructor(private afAuth: AngularFireAuth) {}

  initAuth() {
    this.authStateSub = this.afAuth.authState.subscribe((user) => {
      if (user) {
        const { uid, email, displayName } = user;
        const appUser = { uid, email, displayName };
        this.user = appUser;
        
      } else {
        this.user = null;
      }
      this.authChange.next(this.user);
    });
  }

  destroyAuth() {
    this.authStateSub.unsubscribe();
  }

  signIn() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider());
    // .then((res) => {
    //   console.log('in signIn');
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log('in signIn');
    //   console.log(err);
    // });
  }

  signOut() {
    return this.afAuth.signOut();
  }

  getUser() {
    return this.user;
  }
}
