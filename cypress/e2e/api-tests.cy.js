describe('API tests', () => {
  it('List', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('baseUrl') + '/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.page).to.equal(2);
      expect(response.body.per_page).to.equal(6);
      expect(response.body).to.have.property('page');
      expect(response.body).not.to.be.null;
    });
  });

  it('List users', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('baseUrl') + '/api/unknown'
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.page).to.equal(1);
      expect(response.body.total_pages).to.equal(2);
      expect(response.body).to.have.property('page');
      expect(response.body).not.to.be.null;
    });
  });

  it('Create user', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/users',
      body:
      {
        "name": "morpheus",
        "job": "leader"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body.name).to.equal('morpheus');
      expect(response.body.job).to.equal('leader');
      expect(response.body).to.have.property('createdAt');
      expect(response.body).to.have.property('id');
      expect(response.body).not.to.be.null;
    });
  });

  it('Update user', () => {
    cy.request({
      method: 'PUT',
      url: Cypress.env('baseUrl') + '/api/users/2',
      body:
      {
        "name": "morpheus",
        "job": "zionresident"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.name).to.equal('morpheus');
      expect(response.body.job).to.equal('zionresident');
      expect(response.body).to.have.property('updatedAt');
      expect(response.body).not.to.be.null;
    });
  });

  it('Update user patch', () => {
    cy.request({
      method: 'PATCH',
      url: Cypress.env('baseUrl') + '/api/users/2',
      body:
      {
        "name": "morpheus",
        "job": "zionresident"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.name).to.equal('morpheus');
      expect(response.body.job).to.equal('zionresident');
      expect(response.body).to.have.property('updatedAt');
      expect(response.body).not.to.be.null;
    });
  });

  it('Delete user', () => {
    cy.request({
      method: 'DELETE',
      url: Cypress.env('baseUrl') + '/api/users/2'
    }).then((response) => {
      expect(response.status).to.be.equal(204);
      expect(response.body).to.be.equal('');
    });
  });

  it('Register User - SUCCESSFUL', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/register',
      body:
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('token');
      expect(response.body).not.to.be.null;
    });
  });

  it('Register User - UNSUCCESSFUL', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/register',
      failOnStatusCode: false, // disable this fail in order to continue negative testing
      body:
      {
        "email": "sydney@fife"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.be.equal('Missing password');
      expect(response.body).not.to.be.null;
    });
  });

  it('Login SUCCESSFUL', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/login',
      body:
      {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.property('token');
      expect(response.body).not.to.be.null;
    });
  });

  it('Login UNSUCCESSFUL', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl') + '/api/login',
      failOnStatusCode: false, // disable this fail in order to continue negative testing
      body:
      {
        "email": "eve.holt@reqres.in"
      }
    }).then((response) => {
      expect(response.status).to.be.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.be.equal('Missing password');
      expect(response.body).not.to.be.null;
    });
  });
});