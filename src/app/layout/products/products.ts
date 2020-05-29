import { Subscription } from 'rxjs';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  productsServiceSubscription: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsServiceSubscription = this.productsService.getAllProducts().subscribe(res => {
      console.log(res)
      this.products = res});
  }

  ngOnDestroy() {
    if (this.productsServiceSubscription) { this.productsServiceSubscription.unsubscribe(); }
  }
}
