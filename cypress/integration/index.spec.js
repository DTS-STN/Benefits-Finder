/* eslint-disable no-undef */
// /// <reference types="Cypress" />

// Define at the top of the spec file or just import it
  function checkA11y(cy) {
    cy.checkA11y({
      runonly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'],
      },
    })
  }
  



describe("home page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.injectAxe()
    
    });

    it("landing page loaded", () =>{
        cy.url().should("contains", "/");
       
        
    });

    it('Checkes a11y violations', () => {
        cy.checkA11y()
      })

   // cy.task('log', 'This will be output to the terminal')
    it("Toggles content language when language button is clicked", () => {
        cy.get('[data-cy="toggle-language-link"]').click()
        cy.url().should('eq', 'http://localhost:3000/fr')
    });

    it ("Alpha or Early Access Banner is present ", ()=> {
        cy.get('[data-cy=alpha-banner-text]').should("be.visible");
        cy.get('[data-cy=alpha-banner-description]').should("be.visible");
        cy.get('[data-cy=back-to-active-experiments]').should("be.visible");
        cy.get('[data-cy=back-to-active-experiments]').should("be.visible");
    })
   
})