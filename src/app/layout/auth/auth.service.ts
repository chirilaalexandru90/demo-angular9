import { AuthData } from './authData.model';
import { User } from './user.model';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  private user: User;
  userIsLoggedIn = new Subject<boolean>();
  private isAuthentificated = false;

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    firebase.auth()
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => this.authSuccessfully())
      .catch(error => console.log(error));
  }

  login(authData: AuthData) {
    firebase.auth()
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => this.authSuccessfully())
      .catch(error => console.log(error));
  }

  logout() {
    this.user = null;
    this.isAuthentificated = false;

    this.userIsLoggedIn.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.isAuthentificated;
  }

  private authSuccessfully() {
    this.isAuthentificated = true;
    this.userIsLoggedIn.next(true);
    this.router.navigate(['home']);
  }
}
