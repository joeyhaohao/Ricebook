import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {By} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {MainComponent} from '../main/main.component';
import { AuthComponent } from './auth.component';
import {ProfileComponent} from '../profile/profile.component';
import {ArticleComponent} from '../main/article/article.component';
import { AuthService } from './auth.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        AuthComponent,
        MainComponent,
        ProfileComponent,
        ArticleComponent,
      ],
      providers: [
        // Location
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should log in a previously registered user', () => {
  //   const navigateSpy = spyOn(router, 'navigate');
  //   const formBuilder: FormBuilder = new FormBuilder();
  //   component.loginForm = formBuilder.group({
  //     username: 'Bret',
  //     pwd: 'Kulas Light'
  //   });
  //   component.onLogin(component.loginForm.value);
  //   // const el = fixture.debugElement.query(By.css('#btn-login')).nativeElement;
  //   // el.click();
  //   // expect(router.url).toEqual('/main');
  //   // expect(component.loginFailed).toBeFalsy();
  //   // expect(location.pathname).toEqual('/main');
  //   expect(navigateSpy).toHaveBeenCalledWith(['/main']);
  // });
  //
  // it('should not log in an invalid user', () => {
  //   const navigateSpy = spyOn(router, 'navigate');
  //   const formBuilder: FormBuilder = new FormBuilder();
  //   component.loginForm = formBuilder.group({
  //     username: 'Unknown',
  //     pwd: 'fake pwd'
  //   });
  //   component.onLogin(component.loginForm);
  //   expect(navigateSpy).toHaveBeenCalledTimes(0);
  // });
  //
  it('should update error message state', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    component.loginForm = formBuilder.group({
      username: 'Unknown',
      pwd: 'fake pwd'
    });
    component.onLogin(component.loginForm);
    expect(component.loginFailed).toBeTruthy();
  });
});
