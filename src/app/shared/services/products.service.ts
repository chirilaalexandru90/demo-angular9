import { Product } from './../models/product.model';

export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'description - Lorem ipsum dolor sit amet, consectetur adipisicing Commodo...',
      imgUrl: 'img-01.jpg',
      price: 49.99,
      sex: 'woman',
      categoryList: [],
      items_in_stock: 23,
      date_added: new Date(),
      resealed: false
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'description - 2 - Lorem ipsum dolor sit amet, consectetur adipisicing Commodo...',
      imgUrl: 'img-02.jpg',
      price: 49.99,
      sex: 'man',
      categoryList: [],
      items_in_stock: 3,
      date_added: new Date(),
      resealed: true
    }
  ];
}
