describe('Movies Page Spec', () => {
  it('should navigate to the detail page when the Watch button is clicked', () => {
    
    cy.visit('http://localhost:5173/Movies');

    
    cy.get('button').contains('Watch').should('be.visible');

   
    cy.get('button').contains('Watch').first().click();

  });
});
