import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  endpoint = 'http://localhost:4201';
  firebase = 'https://emart-store.firebaseio.com';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.firebase}/products.json`, {})
      .pipe(map(response => response.map(product => Object.assign(new Product(), product))));
  }

  createProduct(productDto: Product) {
    // return this.http.post<void>(`${this.endpoint}/products`, productDto);
    return this.http.post(`${this.firebase}/products.json`, productDto);
  }

  getProduct(productId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.firebase}/products/${productId}.json`, {})
      .pipe(map(response => Object.assign(new Product(), response)));
  }
}
