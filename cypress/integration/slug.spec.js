
describe("Movie detail", () => {
    before(() => {
        cy.visit('http://localhost:3000/posts/Avengers');
    });
    it('Display movie title', () =>{
        cy.get('h1')
    })
    it('Display movie poster', () =>{
        cy.get('img')
    })
    it('Display movie description', () =>{
        cy.get('#post-content')
    })

})
