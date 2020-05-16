import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.html'
})

export class UserCartComponent implements OnInit {
  @Input()
  isAuth: boolean;
  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authService.logout();
  }

}
