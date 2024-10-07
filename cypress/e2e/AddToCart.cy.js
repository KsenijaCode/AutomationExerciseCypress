// describe('Add Products in Cart', () => {
//   before(() => {
//     // Step 1: Launch browser and navigate to URL
//     cy.visit("");
//   });

//   it('should successfully add products to the cart and verify details', () => {
//     // Step 2: Verify that home page is visible successfully
//     cy.get('h1').should('be.visible');

//     // Step 3: Add products to cart
//     cy.contains('Products').click();

//     const quantityToAdd = 3;    
//     cy.addProductToCart(quantityToAdd);

//     // Verify that product is added to the cart
//     cy.get('#cartModal').should('contain', 'Added');

//     // Step 4: Click 'Cart' button
//     cy.contains('Cart').click();

//     // Step 5: Verify that cart page is displayed
//     cy.url().should('include', 'view_cart');
//     cy.get('.active').contains('Shopping Cart').should('be.visible');

//     // Step 6: Verify all products are added to Cart
//     cy.get('.cart_menu').should('have.length', 3);

//     // Step 7: Verify their prices, quantity, and total price
//       cy.get('.cart_menu').eq(3).within(() => {
//       cy.get('.cart_product').should('be.visible');
//       cy.get('.cart_price').should('be.visible');
//       cy.get('.cart_quantity input').should('have.value', '1');
//     });

//   });
// });
