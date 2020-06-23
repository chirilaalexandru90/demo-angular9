import { AuthService } from './../../layout/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable()
export class CartService {
  private firebase = 'https://emart-store.firebaseio.com';
  numberOfCartProducts = new BehaviorSubject(0);

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getCartItems(): Observable<any[]> {
    // const tokenId = this.authService.getTokenId();
    return this.http.get<any[]>(`${this.firebase}/cart.json`, {})
      .pipe(map(response => this.mapFirebaseResponse(response)));
  }

  addToCart(cartItem: any) {
    return this.http.post(`${this.firebase}/cart.json`, cartItem);
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
