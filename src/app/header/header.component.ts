import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
import { DbService } from '../db/dbService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authChangeSub: Subscription;
  user: User = null;

  constructor(private authService: AuthService, private dbService: DbService) {}

  ngOnInit(): void {
    this.authChangeSub = this.authService.authChange.subscribe((user) => {
      this.user = user;
      if (user) {
        this.dbService.fetchCourses();
      } else {
        this.dbService.clearData();
      }
    });
  }

  ngOnDestroy(): void {
    this.authChangeSub.unsubscribe();
  }

  onLogin() {
    this.authService.signIn();
  }

  onLogout() {
    this.authService.signOut();
  }
}
