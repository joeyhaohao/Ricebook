import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {BehaviorSubject, Observable} from "rxjs";
import {Profile} from "./profile";
import {ProfileService} from "./profile.service";
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private updateInfoForm;
  private _updateFlag: BehaviorSubject<boolean>;
  private _linkFlag: BehaviorSubject<boolean>;
  updateFlag: Observable<boolean>;
  linkFlag: Observable<boolean>;

  profile: Observable<Profile>;

  constructor(private profServ: ProfileService,
              private authServ: AuthService,
              private formBuilder: FormBuilder
  ) {
    this.profile = this.profServ.profile;
    this._updateFlag = new BehaviorSubject<boolean>(false);
    this.updateFlag = this._updateFlag.asObservable();
    this._linkFlag = new BehaviorSubject<boolean>(false);
    this.linkFlag = this._linkFlag.asObservable();
    this.updateInfoForm = this.formBuilder.group({
      username: '',
      email: '',
      phone: '',
      zipcode: '',
      password: '',
    });
  }

  ngOnInit() {
    this.profServ.loadProfile();
    this._updateFlag.next(false);
    this._linkFlag.next(false);
  }

  updateInfo(info) {
    if (info.email.length > 0) {
      this.profServ.updateEmail(info.email);
      this._updateFlag.next(true);
    }
    if (info.zipcode.length > 0) {
      this.profServ.updateZipcode(info.zipcode);
      this._updateFlag.next(true);
    }
    if (info.password.length > 0) {
      this.authServ.updatePwd(info.password);
      this._updateFlag.next(true);
    }
  }

  updateAvatar(file) {
    this.profServ.updateAvatar(file);
  }

  linkAccount() {
    this.authServ.linkAccount();
    this._linkFlag.next(true);
  }

  unlinkAccount() {
    this.authServ.unlinkAccount();
  }
}
