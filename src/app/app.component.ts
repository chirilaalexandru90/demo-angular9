import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './layout/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular9 Store';
  name: any;
  isAuth = false;
  private authSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   console.log(params, params.name)
    //   this.name = params.name;
    // });

    this.authSubscription = this.authService.userIsLoggedIn.subscribe(st => this.isAuth = st);
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
