import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article.model';

@Injectable()
export class BlogService {
  endpoint = 'http://localhost:4201';
  firebase = 'https://emart-store.firebaseio.com';
  constructor(private http: HttpClient) { }

  getBlogArticles(): Observable<Article[]> {
    return this.http.get<any[]>(`${this.firebase}/blog.json`, {})
      .pipe(map(response => this.mapFirebaseResponse(response)));
  }

  createArticle() {
  }

  modifyArticle() {
  }

  getArticle(articleId: string) {
  }

  private mapFirebaseResponse(data: Array<any>) {
    const response = [];
    for (const [key, value] of Object.entries(data)) {
      response.push(Object.assign(new Article(), {
        id: key,
        date: value.date,
        img: value.img,
        title: value.title,
        content: value.content
      }));
    }
    return response;
  }
}
