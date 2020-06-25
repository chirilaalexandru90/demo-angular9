import { CartProduct } from 'src/app/shared/models/cart-product.model';
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
  itemsValue;
  groupedCartItems: CartProduct[];

  private cartServiceSubscription: Subscription;
  private cartItemsNumberSubscription: Subscription;
  private cartChangeSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartDetails();
    this.getItemsNumber();
    this.refreshCartDetails();
  }

  private getItemsNumber() {
    this.cartItemsNumberSubscription = this.cartService.numberOfCartProducts.subscribe(n => this.cartItemsNumber = n);
  }
  private getCartDetails() {
    this.cartServiceSubscription = this.cartService.getCartItems().subscribe(r => {
      this.cartItems = r;
      this.cartService.numberOfCartProducts.next(this.cartItems.length);
      this.itemsValue = this.cartItems.reduce((a, n) => a + n.price, 0).toFixed(2);
      this.groupCartItems(this.cartItems);
    });
  }
  private refreshCartDetails() {
    this.cartChangeSubscription = this.cartService.refreshData.subscribe((cartWasChanged: boolean) => {
      if (cartWasChanged) {
        this.getCartDetails();
      }
    });
  }

  private groupCartItems(products: Product[]) {
    const cartProducts = products.map(p => p.toCartProduct());
    this.groupedCartItems = [];

    const sameItemCounterMap = {};
    cartProducts.forEach((obj) => {
      const key = obj.id;
      sameItemCounterMap[key] = (sameItemCounterMap[key] || 0) + 1;
    });

    // tslint:disable-next-line: forin
    for (const key in sameItemCounterMap) {
      for (const item of cartProducts) {
        if (key === item.id.toString()) {
          this.groupedCartItems.push(item);
          break;
        }
      }
    }

    this.groupedCartItems.forEach((item, index) => {
      for (const id in sameItemCounterMap) {
        if (item.id.toString() === id) {
          this.groupedCartItems[index].quantity = sameItemCounterMap[id];
        }
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
    if (this.cartItemsNumberSubscription) {
      this.cartItemsNumberSubscription.unsubscribe();
    }
    if (this.cartChangeSubscription) {
      this.cartChangeSubscription.unsubscribe();
    }
  }
}
