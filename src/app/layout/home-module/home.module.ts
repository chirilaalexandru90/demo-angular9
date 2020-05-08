import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ProductItem } from './product-item/product-item';

@NgModule({
  declarations: [
    HomeComponent,
    ProductItem
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
