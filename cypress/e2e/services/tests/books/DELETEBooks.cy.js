///<reference types="cypress"/>

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        cy.GETallBooks().then((responseAllBooks) => {
            cy.log(JSON.stringify(responseAllBooks.body[0].id));
            cy.deleteBook(responseAllBooks.body[0].id).then((responseDeleteBook) => {
                expect(responseDeleteBook.status).to.eq(200);

            })
        })
    })

    it('Criar e excluir um livro', () => {
        cy.POSTaddBook().then((responseAddBook) => {
            cy.deleteBook(responseAddBook.body.id).then((responseDeleteBook) => {
                expect(responseDeleteBook.status).to.eq(200);

            })
        })
    })

    it('Deletar um livro inválido', () => {
        let bookInvalid = "larissa"
        cy.deleteBook(bookInvalid).then((responseDeleteBook) => {
            expect(responseDeleteBook.status).to.eq(200);
            //expect(responseDeleteBook.status).to.eq(400);


        })
    })
})










