import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ProductItem } from './product-item/product-item';
import { FeaturedCategoryLgComponent } from './featured-category-lg/featured-category-lg';
import { FeaturedCategorySmComponent } from './featured-category-sm/featured-category-sm';
import { BlogItemBoxComponent } from './blog-item-box/blog-item-box';
import { ServicesBoxComponent } from './services-box/services-box';

@NgModule({
  declarations: [
    HomeComponent,
    ProductItem,
    FeaturedCategoryLgComponent,
    FeaturedCategorySmComponent,
    BlogItemBoxComponent,
    ServicesBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
