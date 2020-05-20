import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class ProductsService {
  endpoint = 'http://localhost:4201';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}/products`, {})
      .pipe(map(response => response.map(product => Object.assign(new Product(), product))));
  }

  createProduct(productDto: Product) {
    return this.http.post<void>(`${this.endpoint}/products`, productDto);
  }

  getProduct(productId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}/products/${productId}`, {})
      .pipe(map(response => Object.assign(new Product(), response)));
  }
}
