import { HttpClient } from '@angular/common/http';
import { AuthData } from './authData.model';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from './user.model';

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
  private isAuthentificated = false;
  user = new Subject<User>();
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
        return throwError(error);
      }),
        tap(res => {
          this.handleAuthentifiedUser(res.email, res.localId, res.idToken, Number.parseInt(res.expiresIn, 2));
        }));
  }

  login(authData: AuthData) {
    return this.http.post<AuthResponseData>(
      this.loginURL,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .pipe(catchError(error => {
        return throwError(error);
      }),
        tap(res => {
          this.handleAuthentifiedUser(res.email, res.localId, res.idToken, Number.parseInt(res.expiresIn, 2));
        }));
  }

  private handleAuthentifiedUser(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  logout() {
    firebase.auth().signOut();
    this.tokenId = null;
    this.isAuthentificated = false;
    this.userIsLoggedIn.next(false);
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
