describe('View Category Products', () => {
  before(() => {
    // Step 1: Launch browser and navigate to URL
    cy.visit("");
  });

  it('should verify categories and navigate through them', () => {
    // Step 2: Verify that categories are visible on left side bar
    cy.get('.left-sidebar').should('be.visible');
    cy.get('.left-sidebar h2').contains('Category').should('be.visible');

    // Step 3: Click on 'Women' category
    cy.contains('Women').click();

    // Step 4: Click on any category link under 'Women', for example: Dress
    cy.contains('Dress').click();

    // Step 5: Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.url().should('include', '/category_products');
    cy.get('.title.text-center').should('contain', 'Women - Dress Products');

    // Step 6: On left side bar, click on any sub-category link of 'Men' category
    cy.get('.left-sidebar').contains('Men').click(); // Ensure 'Men' category is present in the sidebar
    cy.contains('Tshirts').click();

    // Step 7: Verify that user is navigated to that category page
    cy.url().should('include', '/category_products'); // Adjust based on actual URL structure
    cy.get('.title').should('contain', 'Men - Tshirts Products');
  });
});