describe('Search Product Test', () => {
before(() => {
// Step 1: Launch browser and navigate to the URL
cy.visit("http://automationexercise.com");
});

it('should load search results for a product', () => {
  // cy.visit("http://automationexercise.com");
  cy.navigateToAllProductsPage();

// Step 6: Enter product name in search input and click search button
    const productName = 'Blue Top';
    cy.get('input[name="search"]').type(productName);
    cy.get('button[type="submit"]').click();

// Step 7: Verify 'SEARCHED PRODUCTS' is visible
    // cy.contains('Searched Products').should('be.visible');

  // Step 8: Verify all the products related to search are visible
  cy.get('.features_items')
    .should('have.length.greaterThan', 0)
    .each(($el) => {
      cy.wrap($el).should('be.visible');
    });
});
});