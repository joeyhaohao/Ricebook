require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = path => `http://localhost:3000${path}`;
var cookies = '';

describe('Validate Auth functionality', () => {

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

  it('validate POST /login', (done) => {
    fetch(url('/login'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: 'yz157', pwd: '123'})
    }).then(res => res.json()
    ).then(res => {
      expect(res['result']).toBe('Login success')
      done();
    });
  });

  it('validate PUT /logout', (done) => {
    fetch(url("/logout"), {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',
        Cookie: cookies},
    }).then(res => res.json()
    ).then(res => {
      expect(res['result']).toBe('Logout success');
      done();
    });
  });
});
