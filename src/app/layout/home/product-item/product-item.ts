import { Product } from './../../../shared/models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html'
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
