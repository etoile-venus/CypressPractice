/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Login funcionality', () => {

    beforeEach('Page set up', () => {
        cy.visit('https://www.saucedemo.com')
        cy.url().should('contains', "saucedemo.com")
    })

    it('Elements for input data are present', () => {
        cy.get('#user-name').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#login-button').should('be.visible')
    })

    it('User can input data successfully', () => {
        cy.get('#user-name').clear().type("standard_user")
        cy.get('#user-name').should('have.value', 'standard_user')
        cy.get('#password').clear().type("secret_sauce")
        cy.get('#password').should('have.value', 'secret_sauce')
    })

    it('User can successfully log in with valid credentials', ()=> {
        cy.get('#user-name').clear().type("standard_user")
        cy.get('#password').clear().type("secret_sauce")
        cy.get('#login-button').click()
        cy.get("#login-button").should("not.exist"); 
        cy.get("#react-burger-menu-btn").click(); 
        cy.get('#logout_sidebar_link').should("be.visible"); 
        cy.url().should('eq', "https://www.saucedemo.com/inventory.html")   
    })
})