import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ]
})
export class ProductsModule { }
