describe('Sign in', () => {
  context('when invalid credentials are provided', () => {
    it('should not log in customer', () => {
      cy.visit('/')
      cy.get('[data-cy="customer-email"]').clear().type('john.doe@example.com')
      cy.get('[data-cy="customer-password"]').clear().type('wrong-p455w0rd')
      cy.get('[data-cy="submit-credentials"]').click()
      cy.get('[data-cy="auth-notification"]').contains('Unauthorized')
    });

    it('should log in customer', () => {
      cy.visit('/')
      cy.get('[data-cy="customer-email"]').clear().type('john.doe@example.com')
      cy.get('[data-cy="customer-password"]').clear().type('123456')
      cy.get('[data-cy="submit-credentials"]').click()
      cy.get('[data-cy="auth-notification"]').contains('OK')
    });
  })
})
