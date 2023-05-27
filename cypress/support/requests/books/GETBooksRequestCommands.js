/// <reference types="Cypress" />

Cypress.Commands.add('GETallBooks', () => {
    return cy.request({
        method:'Get',
        url:'Books', 
        failOnStatusCode:false, 
    })
})
