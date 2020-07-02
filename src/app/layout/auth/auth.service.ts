import { HttpClient } from '@angular/common/http';
import { AuthData } from './authData.model';
import { User } from './user.model';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

interface AuthRespnseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User;
  private isAuthentificated = false;
  userIsLoggedIn = new Subject<boolean>();
  tokenId: string;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  registerUser(authData: AuthData) {
    console.log('authData', authData)
    return this.http.post<AuthRespnseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMgr3qGUI5G6Y3RiP7agQOjLqzdDqvMAo',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      });
  }

  login(authData: AuthData) {
    firebase.auth()
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        firebase.auth().currentUser.getIdToken()
          .then((tk: string) => this.tokenId = tk);
        this.authSuccessfully();
      })
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

  getTokenId() {
    firebase.auth().currentUser.getIdToken()
      .then((t: string) => this.tokenId = t);
    return this.tokenId;
  }
}
