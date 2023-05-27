/// <reference types="Cypress" />

const payloadAddBook = require('../../payloads/books/add-book.json')

Cypress.Commands.add('POSTaddBook', () => {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
})
