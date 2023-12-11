describe('Money Health Dashboard', () => {
  context('when invalid details are provided', () => {
    it('prevents customer from creating an income statement', () => {
      cy.visit('/')
      cy.get('[data-cy="income-title"]').type('Loan repayment')
      cy.get('[data-cy="income-amount"]').clear()
      cy.contains('Submit').click()
      cy.contains('Income could not be saved to statement')
    })
  })

  context('when valid details are provided', () => {
    it('allows customer to create an income statement', () => {
      cy.visit('/')
      cy.get('[data-cy="income-title"]').clear().type('Loan repayment')
      cy.get('[data-cy="income-amount"]').clear().type(250)
      cy.contains('Submit').click()
      cy.contains('Income successfully added to statement')
    })
  })
})
