import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DbService } from '../db/dbService';
import { Course } from '../logic/courseTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  courses: Course[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.dbService.coursesChanged.subscribe((courses: Course[]) => {
      console.log(courses.length);
      this.courses = courses;
    });
    new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
    });
  }
}
