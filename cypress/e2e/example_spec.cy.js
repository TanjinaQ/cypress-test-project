describe('My First Cypress Test', () => {
    it('visits the Cypress example site and checks the title', () => {
      // Visit the website
      cy.visit('https://example.cypress.io/')
  
      // Check that the title contains "Cypress"
      cy.title().should('include', 'Cypress')
    })
  })
  