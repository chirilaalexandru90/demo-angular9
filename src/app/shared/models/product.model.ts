export interface Product {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  price: number;
  sex: 'man' | 'woman' | null;
  categoryList: Array<string>;
  items_in_stock: number;
  date_added?: Date;
  resealed: boolean;
}
