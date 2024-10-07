describe('Remove Product from Cart', () => {
  before(() => {
    // Step 1: Launch browser and navigate to URL
    cy.visit('http://automationexercise.com');
  });

  it('should successfully remove a product from the cart', () => {
    // Step 2: Verify that home page is visible successfully
    cy.get('h1').should('be.visible');

    // Step 3: Add products to cart
    cy.contains('Products').click();
    
    // Add the first product to the cart
    cy.contains('Add to cart').first().click();

    // Add the second product to the cart
    cy.contains('Add to cart').eq(1).click();

    // Step 4: Click 'Cart' button
    cy.contains('Cart').click();

    // Step 5: Verify that cart page is displayed
    cy.url().should('include', 'view_cart');
    cy.get('h1').contains('Shopping Cart').should('be.visible');

    // Step 6: Click 'X' button corresponding to a particular product
    cy.get('.cart_quantity_delete').first().click();

    // Step 7: Verify that product is removed from the cart
    cy.get('.cart_description').should('have.length', 1);
    cy.get('.cart_description').should('not.contain', 'Product Name');
  });
});
