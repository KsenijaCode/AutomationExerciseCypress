describe('Product Review Test', () => {
  it('should submit a product review successfully', () => {
    // Step 1: Launch browser and navigate to the URL
    cy.visit("");

    // Step 2: Click on 'Products' button
    cy.contains('Products').click();

    // Step 3: Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', 'products');
    cy.get('h2').contains('All Products').should('be.visible');

    // Step 4: Click on 'View Product' button for the first product
    cy.get('.product-image-wrapper').first().find('a').contains('View Product').click();

    // Step 5: Verify 'Write Your Review' is visible
    cy.get('.active').contains('Write Your Review').should('be.visible');

    // Step 6: Enter name, email, and review
    cy.get('input#name').type('Ksenija');
    cy.get('input#email').type('ksenija@google.com');
    cy.get('textarea#review').type('High quality');

    // Step 7: Click 'Submit' button
    cy.get('button[type="submit"]').contains('Submit').click();

    // Step 8: Verify success message 'Thank you for your review.'
    cy.get('.alert-success').should('contain', 'Thank you for your review.');
  });
});