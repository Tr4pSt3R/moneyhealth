describe('Sign out', () => {
  context('when logged in', () => {
    it('should log out customer', () => {
      cy.login({ email: 'john.doe@example.com', password: '123456' })
      cy.get('[data-cy="auth-sign--out"]').click()
      cy.contains('Get started by signing in.')
    });
  })
})
