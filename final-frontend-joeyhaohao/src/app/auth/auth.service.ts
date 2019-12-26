import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {ChatService} from "../chat/chat.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private server = "https://yz157-ricebook.herokuapp.com";
  // private server = "http://localhost:3000";
  private _regFlag: BehaviorSubject<boolean>;
  private _regErr: BehaviorSubject<string>;
  private _loginErr: BehaviorSubject<string>;

  regFlag: Observable<boolean>;
  regErr: Observable<string>;
  loginErr: Observable<string>;

  constructor(private http: HttpClient,
              private router: Router,
              private chatServ: ChatService) {
    this._regFlag = new BehaviorSubject<boolean>(false);
    this.regFlag = this._regFlag.asObservable();
    this._regErr = new BehaviorSubject<string>("");
    this.regErr = this._regErr.asObservable();
    this._loginErr = new BehaviorSubject<string>("");
    this.loginErr = this._loginErr.asObservable();
    this.init();
  }

  init() {
    this._regFlag.next(false);
    this._regErr.next("");
    this._loginErr.next("");
  }

  register(user) {
    this.http.post(this.server+'/register', user, { withCredentials: true }).subscribe(res => {
      console.log(res);
      this._regFlag.next(true);
      this._regErr.next("");
    }, err => {
      this._regFlag.next(false);
      console.log(err);
      this._regErr.next(err.error.error);
    })
  }

  login(user) {
    this.http.post(this.server+'/login', user, { withCredentials: true }).subscribe(res => {
      this._loginErr.next("");
      this.chatServ.login(res['username']);
      this.router.navigateByUrl('/main');
    }, err => {
      this._loginErr.next(err.error.error);
    })
  }

  loginFacebook() {
    window.location.href = this.server + '/auth/facebook';
  }

  logout() {
    this.http.put(this.server + '/logout',{},{ withCredentials: true }).subscribe(res => {
      this.chatServ.logout(res['username']);
      this.router.navigateByUrl('/');
    })
  }

  updatePwd(password) {
    this.http.put(this.server + '/password', {password: password}, {withCredentials: true})
      .subscribe(res => {
    });
  }

  linkAccount() {
    window.location.href = this.server + '/auth/facebook';
  }

  unlinkAccount() {

  }

}
