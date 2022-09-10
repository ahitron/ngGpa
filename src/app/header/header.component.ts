import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authChangeSub: Subscription;
  user: User = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authChangeSub = this.authService.authChange.subscribe((user) => {
      this.user = user;
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
