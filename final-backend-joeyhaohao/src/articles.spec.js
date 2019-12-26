/*
 * Test suite for articles
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = path => `http://localhost:3000${path}`;
var cookies = '';

describe('Validate Article functionality', () => {

  beforeEach((done) => {
    fetch(url('/login'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'yz157', pwd: '123'})
    }).then(res => {
        cookies = res['headers']['_headers']['set-cookie'][0];
        done();
      });
  });

  it('validate GET /articles', (done) => {
    console.log(cookies);
    fetch(url("/articles"), {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
        Cookie: cookies},
    }).then(res => res.json()
    ).then(body => {
        expect(body.articles.length).toBe(5);
        done();
    });
  });

  it('validate GET /articles/id', (done) => {
    fetch(url("/articles/yz157"), {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
        Cookie: cookies},
    }).then(res => res.json()
    ).then(body => {
        expect(body.articles.length).toBe(3);
        done();
      });
  });

  it('validate POST /articles', (done) => {
    fetch(url('/articles'), {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
        Cookie: cookies},
    }).then(res => res.json()).then(res => {
      const num_articles = res['articles'].length;
      fetch(url('/articles'), {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
          Cookie: cookies},
        body: JSON.stringify({text: 'An new article'})
      }).then(res => res.json()
      ).then(res => {
        fetch(url('/articles'), {
          method: 'GET',
          headers: {'Content-Type': 'application/json',
            Cookie: cookies},
        }).then(res => res.json()
        ).then(res => {
          const new_num_articles = res['articles'].length;
          expect(new_num_articles).toBe(num_articles + 1);
          done();
        });
      });
    });
  });
});
