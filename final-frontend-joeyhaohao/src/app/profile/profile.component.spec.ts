import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AuthComponent} from '../auth/auth.component';
import {MainComponent} from '../main/main.component';
import { ProfileComponent } from './profile.component';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from '../main/article/article.component';
import {AuthService} from '../auth/auth.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        RouterModule
      ],
      declarations: [
        ProfileComponent,
        ArticleComponent,
        AuthComponent,
        MainComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
