import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.html'
})

export class UserCartComponent implements OnInit, OnDestroy {
  @Input()
  isAuth: boolean;
  cartItems: any[];
  cartItemsNumber: any;

  private cartServiceSubscription: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.cartServiceSubscription = this.cartService.getCartItems().subscribe(res => {
      console.log(res);
      this.cartItems = res;
      if (this.cartItems) {
        this.cartItemsNumber = this.cartItems.length;
      }
    });

  }

  register() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authService.logout();
  }


  ngOnDestroy() {
    if (this.cartServiceSubscription) {
      this.cartServiceSubscription.unsubscribe();
    }
  }
}
