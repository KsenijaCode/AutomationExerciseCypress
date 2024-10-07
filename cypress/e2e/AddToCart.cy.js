describe('Add Products in Cart', () => {
  before(() => {
    // Step 1: Launch browser and navigate to URL
    cy.visit('http://automationexercise.com');
  });

  it('should successfully add products to the cart and verify details', () => {
    // Step 2: Verify that home page is visible successfully
    cy.get('h1').should('be.visible');

    // Step 3: Click 'Products' button
    cy.contains('Products').click();

    // Step 4: Hover over the first product and click 'Add to cart'
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    // Step 5: Click 'Continue Shopping' button
    cy.contains('Continue Shopping').click();

    // Step 6: Hover over the second product and click 'Add to cart'
    cy.get('.product-image-wrapper').eq(1).trigger('mouseover');
    cy.contains('Add to cart').eq(1).click();

    // Step 7: Click 'View Cart' button
    cy.contains('View Cart').click();

    // Step 8: Verify both products are added to Cart
    cy.get('.cart_description').should('have.length', 2);

    // Step 9: Verify their prices, quantity, and total price
    cy.get('.cart_description').eq(0).within(() => {
      cy.get('.product_name').should('be.visible');
      cy.get('.cart_price').should('be.visible');
      cy.get('.cart_quantity input').should('have.value', '1');
    });

  });
});
