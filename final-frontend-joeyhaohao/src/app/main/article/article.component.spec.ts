import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ArticleComponent } from './article.component';
import {ArticleService} from './article.service';

describe('PostsComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let service: ArticleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ArticleComponent ],
      providers: [ArticleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.loginUser = { id: 1, following: []};
    fixture.detectChanges();
    service = TestBed.get(ArticleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch articles for current logged in user', (done) => {
    service.getObservables().subscribe(response => {
      expect(component.postsDisplay.length).toEqual(10);
      done();
    });
  });

  it('should filter displayed articles by the search keyword', (done) => {
    service.getObservables().subscribe(response => {
      component.onSearch('cum');
      expect(component.postsDisplay.length).toEqual(3);
      done();
    });
  });
});
