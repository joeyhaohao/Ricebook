import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Profile} from "../../profile/profile";
import {HttpClient} from "@angular/common/http";
import {ArticleService} from "../article/article.service";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private server = "https://yz157-ricebook.herokuapp.com";
  // private server = "http://localhost:3000";
  private _following: BehaviorSubject<Profile[]>;
  private followingData: Profile[];
  private _userNotFound: BehaviorSubject<boolean>;

  following: Observable<Profile[]>;
  userNotFound: Observable<boolean>;

  constructor(private http: HttpClient,
              private artiServ: ArticleService) {
    this._following = new BehaviorSubject<Profile[]>(new Array<Profile>());
    this.following = this._following.asObservable();
    this._userNotFound = new BehaviorSubject<boolean>(false);
    this.userNotFound = this._userNotFound.asObservable();
  }

  loadFollowing() {
    this._userNotFound.next(false);
    this.http.get(this.server +'/following', { withCredentials: true })
      .subscribe(res => {
        this.followingData = res['following'];
        this._following.next(Object.assign([], this.followingData));
      })
  }

  addFollowing(username) {
    this.http.put(this.server + '/following/' ,{username: username}, {withCredentials: true})
      .subscribe(res => {
        this.loadFollowing();
        this.artiServ.loadArticles();
      }, err => {
        this._userNotFound.next(true);
      });
  }

  deleteFollowing(userProfile) {
    if (this.followingData.indexOf(userProfile) >= 0) {
      this.http.delete(this.server + '/following/' + userProfile.username, {withCredentials: true})
        .subscribe(res => {
          this.loadFollowing();
          this.artiServ.loadArticles();
        });
    }
  }
}
