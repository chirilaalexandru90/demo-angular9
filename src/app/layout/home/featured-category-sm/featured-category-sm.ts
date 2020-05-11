import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-category-box-sm',
  templateUrl: './featured-category-sm.html'
})
export class FeaturedCategorySmComponent implements OnInit {
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
