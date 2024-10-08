describe('Verify Test Cases Page', () => {
  before(() => {
    // Step 1: Launch browser and navigate to URL
    cy.visit("");
  });

  it('should successfully navigate to the Test Cases page', () => {
    // Step 2: Verify that home page is visible successfully
    cy.get('h2').should('be.visible');

    // Step 3: Click on 'Test Cases' button
    cy.contains('Test Cases').click();

    // Step 4: Verify user is navigated to test cases page successfully
    cy.url().should('include', '/test_cases');
    cy.get('h2').contains('Test Cases').should('be.visible');
  });
});
