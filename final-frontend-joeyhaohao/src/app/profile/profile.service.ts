import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private server = "https://yz157-ricebook.herokuapp.com";
  // private server = "http://localhost:3000";
  private _profile: BehaviorSubject<any>;
  private userProfile: {profile: Profile};

  profile: Observable<Profile>;

  constructor(private http: HttpClient) {
    this.userProfile = {profile : new Profile()};
    this._profile = new BehaviorSubject<Profile>(new Profile());
    this.profile = this._profile.asObservable();
  }

  loadProfile() {

    this.http.get(this.server + '/headline', {withCredentials: true})
      .subscribe(res => {
        this.userProfile.profile.headline = res['headline'];
      });

    this.http.get(this.server + '/avatar', { withCredentials: true })
      .subscribe(res => {
          this.userProfile.profile.avatar = res['avatar'];
        });

    this.http.get(this.server + '/zipcode', { withCredentials: true })
      .subscribe(res => {
          this.userProfile.profile.zipcode = res['zipcode'];
        });

    this.http.get(this.server + '/dob', { withCredentials: true })
      .subscribe(res => {
          this.userProfile.profile.dob = res['dob'];
        });

    this.http.get(this.server + '/email', { withCredentials: true })
      .subscribe(res => {
        this.userProfile.profile.email = res['email'];
        this.userProfile.profile.username = res['username'];
      });

    this._profile.next(Object.assign({}, this.userProfile).profile);
  }

  updateHeadline(headline) {
    this.http.put(this.server + '/headline', {headline: headline}, {withCredentials: true})
      .subscribe(res => {
        this.userProfile.profile.headline = res['headline'];
        this._profile.next(Object.assign({}, this.userProfile).profile);
      });
  }

  updateEmail(email) {
    this.http.put(this.server + '/email', {email: email}, {withCredentials: true})
      .subscribe(res => {
        this.userProfile.profile.email = res['email'];
        this._profile.next(Object.assign({}, this.userProfile).profile);
      });
  }

  updateZipcode(zipcode) {
    this.http.put(this.server + '/zipcode', {zipcode: zipcode}, {withCredentials: true})
      .subscribe(res => {
        this.userProfile.profile.zipcode = res['zipcode'];
        this._profile.next(Object.assign({}, this.userProfile).profile);
      });
  }

  updateAvatar(file) {
    const fd = new FormData();
    fd.append('image', file);
    this.http.put(this.server + '/avatar', fd, {withCredentials: true})
      .subscribe(res => {
        this.userProfile.profile.avatar = res['avatar'];
        this._profile.next(Object.assign({}, this.userProfile).profile);
      })
  }
}
