/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("home page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.injectAxe();
    });

    it("landing page loaded", () =>{
        cy.url().should("contains", "/");
    })
})