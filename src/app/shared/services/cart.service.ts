import { AuthService } from './../../layout/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CartService {
  firebase = 'https://emart-store.firebaseio.com';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getCartItems(): Observable<any[]> {
    const tokenId = this.authService.getTokenId();
    return this.http.get<any[]>(`${this.firebase}/cart.json?auth=${tokenId}`, {})
      .pipe(map(response => this.mapFirebaseResponse(response)));
  }

  addToCart(cartItem: any) {
    return this.http.post(`${this.firebase}/cart.json`, cartItem);
  }

  private mapFirebaseResponse(data: Array<any>) {
    const response = [
      {
        userId: 'a',
        cartItemsIds: [1, 2, 3]
      },
      {
        userId: 'b',
        cartItemsIds: [4, 5, 6]
      }
    ];
    // for (const [key, value] of Object.entries(data)) {
    //   response.push(Object.assign(new Product(), {
    //     id: key,
    //     title: value.title,
    //     description: value.description,
    //     imgUrl: value.imgUrl,
    //     dateAdded: value.dateAdded,
    //     itemsInStock: value.itemsInStock,
    //     price: value.price,
    //     resealed: value.resealed,
    //     sex: value.sex,
    //     categoryList: value.categoryList
    //   }));
    // }
    return response;
  }
}
