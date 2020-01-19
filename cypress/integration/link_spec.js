describe('App link', function () {
  it('clicking app-link navigates to a new url', function () {
    cy.visit('http://localhost:3000')

    cy.get('.App-link').click()

    cy.url().should('include', '#reactjs.org')
  })
})