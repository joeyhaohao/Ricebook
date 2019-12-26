import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import {HttpClientModule} from '@angular/common/http';

describe('PostsService', () => {
  let postServ: ArticleService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
}));

  beforeEach( () => {
    postServ = TestBed.get(ArticleService);
  });

  it('should be created', () => {
    expect(postServ).toBeTruthy();
  });

  it('should add articles when adding a follower', (done) => {
    postServ.getObservables().subscribe(response => {
      const user = {id: 1, following: [{id: 2}, {id: 3}]};
      postServ.updatePosts(user);
      expect(postServ.postsContainer.length).toEqual(30);
      done();
    });
  });

  it('should remove articles when removing a follower', (done) => {
    postServ.getObservables().subscribe(response => {
      let user = {id: 1, following: [{id: 2}, {id: 3}]};
      postServ.updatePosts(user);
      user = {id: 1, following: [{id: 2}]};
      postServ.updatePosts(user);
      expect(postServ.postsContainer.length).toEqual(20);
      done();
    });
  });
});
