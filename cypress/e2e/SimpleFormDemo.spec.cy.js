let data

describe('Select Dropdown list', () => {
  beforeEach(()=>{
    cy.fixture('elements').then(sel=>{
      data = sel
    })
    //The code in the section clicks on Input form on the navbar and also proceeds to click on the simple form demo menu from the dropdown list
  cy.visit('/')
  cy.contains ('Input Forms')
  cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.open > .dropdown-menu > :nth-child(1)').click()
})
  it('Validate that a user can enter data into the message input field of the single input field.', () => {
    cy.get(data.singleFormEnterMessage).type(data.enterMessage)
    cy.contains('Show Message')
    cy.get('#get-input > .btn').click()
    cy.get('#display').contains(data.enterMessage)
  })
  it.only('Validate that a user can type data into the "a" and "b" input fields of the two input field.', () => {
    cy.addValues(5,3)
    cy.contains('Get Total')
    cy.get('#gettotal > .btn').click()
    cy.get('#displayvalue').contains('8')
  })
})