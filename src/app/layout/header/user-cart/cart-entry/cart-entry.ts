import { CartProduct } from 'src/app/shared/models/cart-product.model';
import { Product } from 'src/app/shared/models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-entry',
  templateUrl: './cart-entry.html'
})

export class CartEntryComponent implements OnInit {
  @Input()
  cartItems: CartProduct[];

  itemsValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
