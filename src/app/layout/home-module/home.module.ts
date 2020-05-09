import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ProductItem } from './product-item/product-item';
import { FeaturedCategoryLargeComponent } from './featured-category-lg/featured-category-lg';
import { FeaturedCategorySmallComponent } from './featured-category-sm/featured-category-sm';

@NgModule({
  declarations: [
    HomeComponent,
    ProductItem,
    FeaturedCategoryLargeComponent,
    FeaturedCategorySmallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
