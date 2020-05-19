export class Product {
  id: number = null;
  title = '';
  description = '';
  imgUrl = '';
  price: number = null;
  // sex: 'man' | 'woman' | null = null;
  sex = '';
  categoryList: Array<string> = [];
  itemsInStock: number = null;
  dateAdded?: Date = null;
  resealed: boolean = null;

  constructor(
    id?: number,
    title?: string,
    description?: string,
    imgUrl?: string,
    price?: number,
    sex?: string,
    categoryList?: Array<string>,
    itemsInStock?: number,
    dateAdded?: Date,
    resealed?: boolean
  ) {
    this.id = id ? id : this.id;
    this.title = title ? title : this.title;
    this.description = description ? description : this.description;
    this.imgUrl = imgUrl ? imgUrl : this.imgUrl;
    this.price = price ? price : this.price;
    this.sex = sex ? sex : this.sex;
    this.categoryList = categoryList ? categoryList : this.categoryList;
    this.itemsInStock = itemsInStock ? itemsInStock : this.itemsInStock;
    this.dateAdded = dateAdded ? dateAdded : this.dateAdded;
    this.resealed = resealed ? resealed : this.resealed;
  }
}
