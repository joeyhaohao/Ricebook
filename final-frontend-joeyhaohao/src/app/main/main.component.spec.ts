import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main.component';
import { ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

import {AuthComponent} from '../auth/auth.component';
import {ProfileComponent} from '../profile/profile.component';
import {ArticleComponent} from './article/article.component';
import {ArticleService} from './article/article.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let postServ: ArticleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule,
        AppRoutingModule],
      declarations: [
        MainComponent,
        AuthComponent,
        ProfileComponent,
        ArticleComponent
      ],
      providers: [
        ArticleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    postServ = TestBed.get(ArticleService);
    component = fixture.componentInstance;
    component.loginUser = { id: 1, following: []};
    fixture.detectChanges();
  });

});
