require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = path => `http://localhost:3000${path}`;
var cookies = '';

describe('Validate Profile functionality', () => {

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

  it('validate GET /headline', (done) => {
    fetch(url("/headline"), {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
        Cookie: cookies},
    }).then(res => res.json()
    ).then(res => {
      expect(res.headline).toBe('love and peace');
      done();
    });
  });

  it('validate POST /headline', (done) => {
    fetch(url('/headline'), {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',
        Cookie: cookies},
      body: JSON.stringify({headline: 'Pride and Prejudice'})
    }).then(res => res.json()
    ).then(res => {
      fetch(url('/headline'), {
        method: 'GET',
        headers: {'Content-Type': 'application/json',
          Cookie: cookies},
      }).then(res => res.json()
      ).then(res => {
        expect(res['headline']).toBe('Pride and Prejudice');
        done();
      });
    });
  });
});
