describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://offerup.com')
    cy.get('.jss157').type('Hello World\n')
    cy.get('.jss3484').click
  })
})
