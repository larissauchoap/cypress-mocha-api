///<reference types="cypress"/>

describe('POST Books', () => {
    it('Adicionar novo livro', () => {
        cy.POSTaddBook().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.equal("Livro da Larissa");
        })
    })
    it('Adicionar novo livro- Teste Negativo', () => {
        cy.POSTaddBook().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.equal("Livro");
        })
    })
})









