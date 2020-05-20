import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { SERVICES_LIST } from './models/services-list.model';
import { FT_CATEGORY_LG_LIST } from './models/featured-category-lg-list';
import { FT_CATEGORY_SM_LIST } from './models/featured-category-sm-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  servicesList = SERVICES_LIST;
  listOfLargeCategories = FT_CATEGORY_LG_LIST;
  listOfSmallCategories = FT_CATEGORY_SM_LIST;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res => console.log(res))
  }

}
