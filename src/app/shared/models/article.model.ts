export class Article {
  date: Date;
  img: string;
  title: string;
  content: string;

  constructor(
    date?: Date,
    img?: string,
    title?: string,
    content?: string
  ) {
    this.date = date ? date : this.date;
    this.img = img ? img : this.img;
    this.title = title ? title : this.title;
    this.content = content ? content : this.content;
  }
}
