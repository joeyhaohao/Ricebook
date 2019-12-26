import {Component, Input, OnInit} from '@angular/core';
import { ArticleService } from './article.service';
import {Observable} from "rxjs";
import {Article} from "./article";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ProfileService} from "../../profile/profile.service";
import {Profile} from "../../profile/profile";

@Component({
  selector: 'app-articles',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  posts = [];
  postsDisplay = [];
  articles: Observable<Article[]>;
  profile: Observable<Profile>;

  constructor(private artiServ: ArticleService,
              private profServ: ProfileService,
              private modalService: NgbModal) {
    this.articles = artiServ.articles;
    this.profile = profServ.profile;
  }

  ngOnInit() {
  }

  onSearch(text) {
    this.artiServ.search(text);
  }

  onAddPost(text, file) {
    if (text.length > 0) {
      this.artiServ.addArticles(text, file);
    }
  }

  onEditArticle(article, text) {
    if (text.length > 0) {
      this.artiServ.editArticle(article, text);
    }
  }

  openModal(content) {
    this.modalService.open(content);
  }

  onComment(article, comment) {
    if (comment.length > 0) {
      this.artiServ.addComment(article, comment);
    }
  }

  onEditComment(article, comment, text) {
    if (text.length > 0) {
      this.artiServ.editComment(article, comment, text);
    }
  }
}
