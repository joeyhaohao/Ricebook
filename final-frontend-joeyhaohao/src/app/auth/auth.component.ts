import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import {ArticleService} from '../main/article/article.service';
import {Observable} from "rxjs";
import {ChatService} from "../chat/chat.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  registerForm;
  loginForm;
  regFlag: Observable<boolean>;
  regErr: Observable<string>;
  loginErr: Observable<string>;

  constructor(
    private authServ: AuthService,
    private postServ: ArticleService,
    private chatServ: ChatService,
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      displayName: '',
      email: '',
      phone: '',
      dob: '',
      zipcode: '',
      pwd: '',
      pwdConfirm: '',
      timestamp: ''
    }, {validator: [this.validatePwds, this.validateDob]});

    this.loginForm = this.formBuilder.group( {
      username: '',
      pwd: '',
    });
  }

  ngOnInit() {
    this.regFlag = this.authServ.regFlag;
    this.regErr = this.authServ.regErr;
    this.loginErr = this.authServ.loginErr;
    this.authServ.init();
  }

  validatePwds(group: FormGroup) {
    let pwd = group.value.pwd;
    let pwdConfirm = group.value.pwdConfirm;

    return pwd === pwdConfirm ? null : { pwdNotMatch: true };
  }

  validateDob(group: FormGroup) {
    if ((Date.now() - Date.parse(group.value.dob)) / 1000 / 86400 / 365 < 18) {
      return {tooYoung: true};
    }
    return null;
  }

  onRegister(user) {
    if (this.registerForm.valid) {
      this.authServ.register(user);
    }
  }

  onLogin(user) {
    this.authServ.login(user)
  }

  onLoginFacebook() {
    this.authServ.loginFacebook();
  }
}
