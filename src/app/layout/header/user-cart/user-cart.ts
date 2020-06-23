import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.html'
})

export class UserCartComponent implements OnInit, OnDestroy {
  @Input()
  isAuth: boolean;

  cartItems: Product[];
  cartItemsNumber = 0;
  itemsValue: number;

  private cartServiceSubscription: Subscription;
  private cartItemsNumberSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getCartItems();
    this.getItemsNumber();
  }

  private getItemsNumber() {
    this.cartItemsNumberSubscription = this.cartService.numberOfCartProducts.subscribe(n => this.cartItemsNumber = n);
  }
  private getCartItems() {
    this.cartServiceSubscription = this.cartService.getCartItems().subscribe(r => {
      this.cartItems = r;
      this.cartService.numberOfCartProducts.next(this.cartItems.length);
      this.itemsValue = this.cartItems.reduce((a, n) => a + n.price, 0);
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
    if (this.cartItemsNumberSubscription) {
      this.cartItemsNumberSubscription.unsubscribe();
    }
  }
}
