// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Welcome to the H-L Technical Assessment')
  });
  it('shows 12 products by default', () => {
    cy.visit('/')
    cy.get('div.container-fluid').get('div.row').find('div.col').its('length').should('eq', 12)
  })
})
