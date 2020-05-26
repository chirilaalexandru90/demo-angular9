import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './layout/home/home.module';
import { ProductsComponent } from './layout/products/products';
import { HeaderModule } from './layout/header/header.module';
import { FooterComponent } from './layout/footer/footer';
import { NotFoundComponent } from './layout/not-found/not-found';
import { AuthService } from './layout/auth/auth.service';
import { MaterialModule } from './material.module';
import { AuthModule } from './layout/auth/auth.module';
import { HeaderComponent } from './layout/header/header';
import { ProductsService } from './shared/services/products.service';
import { AdminModule } from './layout/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HeaderModule,
    AuthModule,
    AdminModule,
    HomeModule,
  ],
  providers: [
    AuthService,
    ProductsService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    ProductsService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
