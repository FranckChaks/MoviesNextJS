
describe("Home", () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });
    it('Visits home page', function(){
        cy.visit('http://localhost:3000');
    })
    it('Display header', () =>{
        cy.get('header')
    })
    it('Display website title', () =>{
        cy.get('h1')
    })
    it('Display website description', () =>{
        cy.get('#post-content')
    })
    it('Display footer', () =>{
        cy.get('footer')
    })

  /*  it('Visits first film', () =>{
        cy.get('a[href*="Avengers"]').click()
        cy.visit('http://localhost:3000/posts/Avengers')
    })*/
})
