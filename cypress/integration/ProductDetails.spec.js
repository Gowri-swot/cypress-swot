describe('Product Details Page', () => {

    it('Visit Home page and then selecting first item', () => {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > .card > .product__link > .card-img-top').click()
    })

    it('Checking the page change to individual project details', () => {
        cy.url().should('equal', 'http://localhost:3000/products/0')
    })

    it('View of different angles of the product', () => {
        cy.get('.img-small-wrap > :nth-child(2)').click()
        cy.get('.img-small-wrap > :nth-child(3)').click()
    })

    it('Add to cart button from product Detail page', () => {
        cy.get('.btn').click()
        cy.window().its('store').invoke('getState').its('shop.cart').should('have.length', 1)
    })
    
})