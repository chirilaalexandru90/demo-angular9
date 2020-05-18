export interface Product {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  price: number;
  sex: 'man' | 'woman' | null;
  categoryList: Array<string>;
  itemsInStock: number;
  dateAdded?: Date;
  resealed: boolean;
}
