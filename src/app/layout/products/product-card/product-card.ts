import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html'
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
