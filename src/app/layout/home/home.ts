import { Subscription } from 'rxjs';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SERVICES_LIST } from './models/services-list.model';
import { FT_CATEGORY_LG_LIST } from './models/featured-category-lg-list';
import { FT_CATEGORY_SM_LIST } from './models/featured-category-sm-list';
import { Product } from 'src/app/shared/models/product.model';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  servicesList = SERVICES_LIST;
  listOfLargeCategories = FT_CATEGORY_LG_LIST;
  listOfSmallCategories = FT_CATEGORY_SM_LIST;
  featuredProducts: Product[];

  productsServiceSubscription: Subscription;
  blogServiceSubscription: Subscription;
  articles: Article[];


  constructor(
    private productsService: ProductsService,
    private blogService: BlogService
    ) { }

  ngOnInit(): void {
    this.getFeaturedProducts();
    this.getBlogArticles();
  }

  private getFeaturedProducts() {
    this.productsServiceSubscription = this.productsService.getFeaturedProducts().subscribe(
      r => this.featuredProducts = r,
      e => console.log(e));
  }
  private getBlogArticles() {
    this.blogServiceSubscription = this.blogService.getBlogArticles().subscribe(
      r => this.articles = r,
      e => console.log(e));

  }

  ngOnDestroy() {
    if (this.productsServiceSubscription) { this.productsServiceSubscription.unsubscribe(); }
    if (this.blogServiceSubscription) { this.blogServiceSubscription.unsubscribe(); }
  }

}
