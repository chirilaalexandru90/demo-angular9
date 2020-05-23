import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ProductItemComponent } from './product-item/product-item';
import { FeaturedCategoryLgComponent } from './featured-category-lg/featured-category-lg';
import { FeaturedCategorySmComponent } from './featured-category-sm/featured-category-sm';
import { BlogItemBoxComponent } from './blog-item-box/blog-item-box';
import { ServicesBoxComponent } from './services-box/services-box';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent,
    ProductItemComponent,
    FeaturedCategoryLgComponent,
    FeaturedCategorySmComponent,
    BlogItemBoxComponent,
    ServicesBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
