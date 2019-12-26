export class Article{
  text: string;
  date: string;
  author: string;
  image: string;
  comments: [ Comment ];
}

export class Comment{
  text: string;
  date: string;
  author: string;
}
