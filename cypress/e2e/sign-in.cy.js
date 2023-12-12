describe('Sign in', () => {
  context('when invalid credentials are provided', () => {
    it('should not log in customer', () => {
      cy.login({ email: 'john.bad.doe@example.com', password: 'wrong-p455w0rd-1234567890-' })
      cy.get('[data-cy="auth-notification"]')
      cy.contains('Unauthorized')
    });

    it('should log in customer', () => {
      cy.login({ email: 'john.doe@example.com', password: '123456' })
      cy.contains('Welcome')
    });
  })
})
