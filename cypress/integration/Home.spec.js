describe('Home Page', () => {

    it('Visit Home page of Shopping Cart', () => {
        cy.visit('http://localhost:3000')
    })

    it('Add Filters to the product list', () => {
        cy.visit('http://localhost:3000')
        cy.window().its('store').invoke('getState').its('shop.products').should('have.length.greaterThan', 0)  
        cy.get('[type="checkbox"]').first().check()
        cy.window().its('store').invoke('getState').its('brandFilter').should('not.equal', "") 
    })

    it('High/Low filter', () => {
        cy.get('[type="radio"]').first().check() 
        cy.window().its('store').invoke('getState').its('orderBy').should('not.equal', "")
    })

    it('After adding orderBy filter, remove filter button', () => {
        cy.get('.text-remove-selected').click()
    })

    // ***********************************************************
    //   Example for network calls
    // ***********************************************************
    // it('network call', () => {
    //     cy.server();
    //     cy.route('GET', `https://jsonplaceholder.typicode.com/todos`).then(res => {
    //         console.log(res)
    //     })
    // })
   
})