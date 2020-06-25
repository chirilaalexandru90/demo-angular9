import { Product } from './../../../shared/models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html'
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
      .subscribe(
        (elem) => {
          this.cartService.refreshData.next(true);
        },
        e => console.log(e));
  }

}
