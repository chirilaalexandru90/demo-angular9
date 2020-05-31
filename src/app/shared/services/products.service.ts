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

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.firebase}/products.json`, {})
      // .pipe(map(response => response.map(product => Object.assign(new Product(), product))));
      .pipe(map(response => this.mapFirebaseResponse(response)));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.firebase}/featuredProducts.json`, {})
      .pipe(map(response => this.mapFirebaseResponse(response) ));
  }

  createProduct(productDto: Product) {
    return this.http.post(`${this.firebase}/products.json`, productDto);
  }

  modifyProduct(id: string, productDto: Product) {
    return this.http.put(`${this.firebase}/products` + '/' + id + '.json', productDto);
  }

  getProduct(productId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.firebase}/products/${productId}.json`, {})
      .pipe(map(response => Object.assign(new Product(), response)));
  }

  private mapFirebaseResponse(data: Array<any>) {
    const response = [];
    for (const [key, value] of Object.entries(data)) {
      response.push(Object.assign(new Product(), {
        id: key,
        title: value.title,
        description: value.description,
        imgUrl: value.imgUrl,
        dateAdded: value.dateAdded,
        itemsInStock: value.itemsInStock,
        price: value.price,
        resealed: value.resealed,
        sex: value.sex,
        categoryList: value.categoryList
      }));
    }
    return response;
  }
}
