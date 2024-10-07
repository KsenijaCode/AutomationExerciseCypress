// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('navigateToAllProductsPage', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/products']").click();
    cy.contains('All Products').should('be.visible');
});

Cypress.Commands.add('navigateToProductDetails', () => {
    cy.get('a[href="/product_details/1"]').click();
});

Cypress.Commands.add('addProductToCart', (quantity) => {
    cy.navigateToProductDetails();
    cy.get('h2').should('be.visible');
    cy.get('.product-information').should('be.visible');
    cy.get('input[name="quantity"]').clear().type(quantity);
    cy.get('.cart').click();
});