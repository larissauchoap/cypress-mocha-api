/// <reference types="Cypress" />

Cypress.Commands.add('deleteBook', (idBook) => {
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false
    })
})
