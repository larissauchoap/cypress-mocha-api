///<reference types="cypress"/>

describe('change Book', () => {
    it('Alterar um livro', () => {
        cy.GETallBooks().then((responseAllBooks) => {
            cy.PUTchangeBook(responseAllBooks.body[0].id).then((responsechangeBook) => {
                expect(responsechangeBook.status).to.eq(200);
                expect(responsechangeBook.body).to.be.not.null;
                expect(responsechangeBook.body.title).to.eq("Livro alterado")

            })

        })
    })
})











