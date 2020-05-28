import { Subscription } from 'rxjs';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SERVICES_LIST } from './models/services-list.model';
import { FT_CATEGORY_LG_LIST } from './models/featured-category-lg-list';
import { FT_CATEGORY_SM_LIST } from './models/featured-category-sm-list';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  servicesList = SERVICES_LIST;
  listOfLargeCategories = FT_CATEGORY_LG_LIST;
  listOfSmallCategories = FT_CATEGORY_SM_LIST;
  featuredProducts: Product[];
  productsServiceSubscription: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsServiceSubscription = this.productsService.getFeaturedProducts().subscribe(res => this.featuredProducts = res);
  }

  ngOnDestroy() {
    if (this.productsServiceSubscription) { this.productsServiceSubscription.unsubscribe(); }
  }

}
