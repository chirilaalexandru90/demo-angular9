import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-category-box-lg',
  templateUrl: './featured-category-lg.html'
})
export class FeaturedCategoryLgComponent implements OnInit {
  @Input()
  image: string;
  @Input()
  title: string;
  @Input()
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
