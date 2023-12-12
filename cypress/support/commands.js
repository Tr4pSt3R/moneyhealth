// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', ({email, password}) => {
  cy.visit('/')
  cy.reload()
  cy.log(`Logging as ${email}`)

  cy.get('[data-cy="customer-email"]').clear().type('john.doe@example.com')
  cy.get('[data-cy="customer-password"]').clear().type('123456')
  cy.get('[data-cy="submit-credentials"]').click()
  cy.get('[data-cy="auth-notification"]').contains('OK')

  cy.log('User logged in')
})
