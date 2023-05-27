/// <reference types="Cypress" />

const payloadChangeBook = require('../../payloads/books/change-book.json')

Cypress.Commands.add('PUTchangeBook', (idBook) => {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json',
        },

        failOnStatusCode: false,
        body: payloadChangeBook


    })

})
