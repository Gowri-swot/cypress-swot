describe('Shopping Cart Component', () => {
    it('Add product to cart', () => {
        cy.visit('http://localhost:3000/')
        cy.window().its('store').invoke('getState').its('shop.cart').should('have.length', 0)
        cy.get(':nth-child(1) > .card > .card-body > .btn').click()
        
    })
    it('Check the value of state change', () => {
        cy.window().its('store').invoke('getState').its('shop.cart').should('have.length', 1)
    })

    it('Visit Shopping cart page by Header click', () => {
        cy.get(':nth-child(1) > .card > .card-body > .btn').click()
        cy.window().its('store').invoke('getState').its('shop.cart').should('have.length', 1)
        cy.get('.nav-link')
        .invoke('attr', 'href')
        .then(href => {
          cy.visit('http://localhost:3000/cart');
        });
    })


})