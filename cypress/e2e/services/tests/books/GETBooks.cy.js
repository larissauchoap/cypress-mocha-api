///<reference types="cypress"/>

describe('GET Books', () => {
    it('Listar todos os livros', () => {
        cy.GETallBooks().then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })

    })


})



