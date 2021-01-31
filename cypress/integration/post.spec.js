
describe("Posts", () => {
    before(() => {
        cy.visit('http://localhost:3000/posts');
    });
    it('Display list', () =>{
        cy.get('#list-movies')
    })
    it('Display list elements', () =>{
        cy.get('.img_card')
    })
})
