import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Article} from "./article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private server = "https://yz157-ricebook.herokuapp.com";
  // private server = "http://localhost:3000";
  private _articles: BehaviorSubject<Article[]>;
  private articlesData: Article[];

  articles: Observable<Article[]>;

  constructor(private http: HttpClient) {
    this._articles = new BehaviorSubject<Article[]>(new Array<Article>());
    this.articles = this._articles.asObservable();
  }

  // compareArtcles(a, b) {
  //   if (a.date > b.date){
  //     return -1;
  //   } else if (a.date < b.date){
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // }

  loadArticles() {
    this.articlesData = new Array<Article>();
    this.http.get(this.server +'/articles', { withCredentials: true })
      .subscribe(res => {
        this.articlesData  = res['articles'];
        this._articles.next(Object.assign([], this.articlesData));
      });

  }

  addArticles(text, file) {
    const fd = new FormData();
    fd.append('text', text);
    fd.append('image', file);
    this.http.post(this.server + '/articles', fd, { withCredentials: true })
      .subscribe(res => {
        this.loadArticles();
      });
  }

  editArticle(article, text) {
    this.http.put(this.server + '/articles/' + article._id, {text: text}, {withCredentials: true})
      .subscribe(res => {
        this.loadArticles();
      })
  }

  search(text) {
    const articles = this.articlesData.filter(function (article) {
      return article.text.indexOf(text) !== -1 || article.author.indexOf(text) !== -1;
    });
    this._articles.next(Object.assign([], articles));
  }

  addComment(article, comment) {
    this.http.put(this.server + '/articles/' + article._id, {commentId: -1, text: comment}, {withCredentials: true})
      .subscribe(res => {
        this.loadArticles();
      })
  }

  editComment(article, comment, newComment) {
    console.log(comment._id);
    this.http.put(this.server + '/articles/' + article._id, {commentId: comment._id, text: newComment}, {withCredentials: true})
      .subscribe(res => {
        this.loadArticles();
      })
  }
}
