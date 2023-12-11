describe('Money Health Dashboard', () => {
  context('when invalid details are provided', () => {
    it('prevents customer from creating an expenditure statement', () => {
      cy.visit('/')
      cy.get('[data-cy="expenditure-title"]').type('Loan repayment')
      cy.get('[data-cy="expenditure-amount"]').clear()
      cy.get('[data-cy="submit-expenditure"]').click()
      cy.contains('Expenditure could not be saved to statement')
    });
  })

  context('when valid details are provided', () => {
    it('allows customer to create an expenditure statement', () => {
      cy.visit('/')
      cy.get('[data-cy="expenditure-title"]').clear().type('Loan repayment')
      cy.get('[data-cy="expenditure-amount"]').clear().type(250)
      cy.get('[data-cy="submit-expenditure"]').click()
      cy.contains('Expenditure successfully added to statement')
    })
  })

  context('when invalid details are provided', () => {
    it('prevents customer from creating an income statement', () => {
      cy.visit('/')
      cy.get('[data-cy="income-title"]').type('Salary')
      cy.get('[data-cy="income-amount"]').clear()
      cy.get('[data-cy="submit-income"]').click()
      cy.contains('Income could not be saved to statement')
    })
  })

  context('when valid details are provided', () => {
    it('allows customer to create an income statement', () => {
      cy.visit('/')
      cy.get('[data-cy="income-title"]').clear().type('Salary')
      cy.get('[data-cy="income-amount"]').clear().type(2500)
      cy.get('[data-cy="submit-income"]').click()
      cy.contains('Income successfully added to statement')
    })
  })

  describe('Statement', () => {
    it('should display disposable income', () => {
      cy.intercept('/statement', { fixture: 'statements.json' }).as('getStatements')
      cy.visit('/')
      cy.wait('@getStatements')
      cy.get('[data-cy="disposable-income"]').contains('2337')
    });
  })
})
