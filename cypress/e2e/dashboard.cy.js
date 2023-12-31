describe('Money Health App', () => {
  describe('Expenditure', () => {
    beforeEach(() => {
      cy.login({email: 'john.doe@example.com', password: '123456'});
    })

    context('when invalid details are provided', () => {
      it('prevents customer from creating an expenditure statement', () => {
        cy.get('[data-cy="expenditure-title"]').type('Loan repayment')
        cy.get('[data-cy="expenditure-amount"]').clear()
        cy.get('[data-cy="submit-expenditure"]').click()
        cy.contains('Expenditure could not be saved to statement')
      });
    })

    context('when valid details are provided', () => {
      it('allows customer to create an expenditure statement', () => {
        cy.get('[data-cy="expenditure-title"]').clear().type('Loan repayment')
        cy.get('[data-cy="expenditure-amount"]').clear().type(250)
        cy.get('[data-cy="submit-expenditure"]').click()
        cy.contains('Expenditure successfully added to statement')
      })
    })
  })

  describe('Income', () => {
    beforeEach(() => {
      cy.login({email: 'john.doe@example.com', password: '123456'});
    })

    context('when invalid details are provided', () => {
      it('prevents customer from creating an income statement', () => {
        cy.get('[data-cy="income-title"]').type('Salary')
        cy.get('[data-cy="income-amount"]').clear()
        cy.get('[data-cy="submit-income"]').click()
        cy.contains('Income could not be saved to statement')
      })
    })

    context('when valid details are provided', () => {
      it('allows customer to create an income statement', () => {
        cy.get('[data-cy="income-title"]').clear().type('Salary')
        cy.get('[data-cy="income-amount"]').clear().type(2500)
        cy.get('[data-cy="submit-income"]').click()
        cy.contains('Income successfully added to statement')
      })
    })
  })

  describe('Statement', () => {
   beforeEach(() => {
     cy.login({email: 'john.doe@example.com', password: '123456'});

     cy.intercept('/statement', { fixture: 'statements.json' }).as('getStatements')
     cy.wait('@getStatements')
   })

   it('should display disposable income', () => {
     cy.get('[data-cy="disposable-income"]').contains('2337')
   });

   it('should display income-expenditure rating', () => {
     cy.get('[data-cy="rating"]').contains('Rating: B')
   });
  })
})
