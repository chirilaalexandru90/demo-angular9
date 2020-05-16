import { AuthData } from './authData.model';
import { User } from './user.model';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private user: User;
  userIsLoggedIn = new Subject<boolean>();

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.authSuccessfully();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.userIsLoggedIn.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.userIsLoggedIn.next(true);
    this.router.navigate(['home']);
  }
}
