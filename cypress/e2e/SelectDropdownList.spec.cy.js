let data

describe('Select Dropdown list', () => {
  beforeEach(()=>{
    cy.fixture('elements').then(sel=>{
      data = sel
    })
    //The code in the section clicks on Input form on the navbar and also proceeds to click on the select dropdown list menu from the dropdown list
  cy.visit('/')
  cy.contains ('Input Forms')
  cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').click()
  cy.get('.open > .dropdown-menu > :nth-child(4)').click()
})
  it('Validate that a user can select a day from the dropdown list in the select list demo form.', () => {
    cy.get('#select-demo').select('Monday')
    cy.get('.selected-value').contains('Monday')
  })
   it('Validate that a user can select multiple states from the dropdown list in the multi select list demo form and get the first selected state.', () => {
    cy.get(data.multiSelect).select('New York', 'Ohio', 'Washington')
    cy.get('#printMe').click()
    cy.get('.getall-selected').contains('First selected option is : New York')
  })
  it('Validate that a user can select multiple states from the dropdown list in the multi select list demo form and get all selected states.', () => {
    cy.get(data.multiSelect).select('New York', 'Ohio', 'Washington')
    cy.get('#printAll').click()
    cy.get('.getall-selected').contains('options selected are : New York,Ohio,Washington')
  })
  
})