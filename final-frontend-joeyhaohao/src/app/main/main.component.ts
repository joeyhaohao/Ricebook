import {Component, NgModule, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ArticleService} from './article/article.service';
import {ProfileService} from "../profile/profile.service";
import {FollowService} from "./follow/follow.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Profile} from "../profile/profile";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  profile: Observable<Profile>;
  following: Observable<Profile[]>;
  userNotFound: Observable<boolean>;

  constructor(private authServ: AuthService,
              private artiServ: ArticleService,
              private profServ: ProfileService,
              private followServ: FollowService) {
    this.profile = this.profServ.profile;
    this.following = this.followServ.following;
    this.userNotFound = this.followServ.userNotFound;
  }

  ngOnInit() {
    this.profServ.loadProfile();
    this.followServ.loadFollowing();
    this.artiServ.loadArticles();
  }

  onLogout() {
    this.authServ.logout();
  }

  updateHeadline(headline) {
    if (headline.length > 0) {
      this.profServ.updateHeadline(headline);
    }
  }

  follow(name) {
    if (name.length > 0) {
      this.followServ.addFollowing(name);
    }
  }

  unfollow(userProfile) {
    this.followServ.deleteFollowing(userProfile);
  }

}
