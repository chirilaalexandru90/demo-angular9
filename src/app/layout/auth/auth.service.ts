import { HttpClient } from '@angular/common/http';
import { AuthData } from './authData.model';
import { User } from './user.model';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User;
  private isAuthentificated = false;
  userIsLoggedIn = new Subject<boolean>();
  tokenId: string;
  signupURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMgr3qGUI5G6Y3RiP7agQOjLqzdDqvMAo';
  loginURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMgr3qGUI5G6Y3RiP7agQOjLqzdDqvMAo';

  constructor(
    private router: Router,
    private http: HttpClient) { }

  registerUser(authData: AuthData) {
    return this.http.post<AuthResponseData>(
      this.signupURL,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .pipe(catchError(error => {
        // console.log(error, throwError(error));
        return throwError(error);
      }));
  }

  login(authData: AuthData) {
    return this.http.post<AuthResponseData>(
      this.loginURL,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    );
  }

  logout() {
    firebase.auth().signOut();
    this.user = null;
    this.tokenId = null;
    this.isAuthentificated = false;
    this.userIsLoggedIn.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.isAuthentificated;
  }

  authSuccessfully() {
    this.isAuthentificated = true;
    this.userIsLoggedIn.next(true);
    this.router.navigate(['home']);
  }

  getTokenId() {
    firebase.auth().currentUser.getIdToken()
      .then((t: string) => this.tokenId = t);
    return this.tokenId;
  }
}
