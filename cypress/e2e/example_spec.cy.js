describe('My First Cypress Test', () => {
    it('visits the Cypress example site and checks the title', () => {
      // Visit the website
      cy.visit('https://example.cypress.io/')
  
      // Check that the title contains "Cypress"
      cy.title().should('include', 'Cypress')
    })
  })

  describe('visit petstore', () => {
    it('navigate to fish page', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.get('div[id=SidebarContent]')
          .children()
          .first()
          .click()
        cy.contains('Tiger Shark').should('exist')
    })
})
  