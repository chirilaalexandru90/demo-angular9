import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-blog-item-box',
  templateUrl: './blog-item-box.html'
})
export class BlogItemBoxComponent implements OnInit {

  @Input()
  article: Article;

  constructor() {
  }

  ngOnInit(): void {
  }

  formatDate() {
    return this.article.date.toString().split('-').slice(0, 2).reverse().join(' ');
  }

}
