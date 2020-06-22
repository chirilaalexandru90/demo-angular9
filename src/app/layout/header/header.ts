import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  private authSubscription: Subscription;

  constructor(
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.userIsLoggedIn.subscribe((status: boolean) => this.isAuth = status);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
