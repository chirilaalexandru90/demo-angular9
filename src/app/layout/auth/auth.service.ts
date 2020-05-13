import { AuthData } from './authData.model';
import { User } from './user.model';
import { Subject } from 'rxjs/internal/Subject';

export class AuthService {
  private user: User;
  userIsLoggedIn = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.userIsLoggedIn.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.userIsLoggedIn.next(true);
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
}
