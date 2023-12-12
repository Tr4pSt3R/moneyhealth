Cypress.Commands.add('login', ({email, password}) => {
  cy.visit('/')
  cy.reload()
  cy.log(`Logging as ${email}`)

  cy.get('[data-cy="customer-email"]').clear().type(email)
  cy.get('[data-cy="customer-password"]').clear().type(password)
  cy.get('[data-cy="submit-credentials"]').click()

  cy.log('Customer logged in')
})
