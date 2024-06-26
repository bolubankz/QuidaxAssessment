let data

describe('Select Dropdown list', () => {
  beforeEach(()=>{
    cy.fixture('elements').then(sel=>{
      data = sel
    })
    //The code in the section clicks on Alerts & Modals on the navbar and also proceeds to click on the simple form demo menu from the dropdown list
  cy.visit('/')
  cy.contains ('Alerts & Modals')
  cy.get('.navbar-right > :nth-child(2)').click()
  cy.get('.open > .dropdown-menu > :nth-child(2)').click()
})
  it('Validate that a user can launch a modal from the single modal example.', () => {
    cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
    cy.get(data.singleModalBody).should('be.visible')
  })
  it('Validate that a user can close an open modal from the single modal example.', () => {
    cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
    cy.get(data.singleModalBody).should('be.visible')
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').click()
    cy.get(data.singleModalBody).should('not.be.visible')
  })
  it('Validate that a user can Save the changes made to a modal from the single modal example', () => {
    cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]').click()
    cy.get(data.singleModalBody).should('be.visible')
   cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(data.singleModalBody).should('not.be.visible')
  })
  it('Validate that a user can launch the second modal from the multiple modal example.', () => {
    cy.get('[href="#myModal"]').click()
    cy.get(data.modal1Body).should('be.visible')
    cy.get('.modal-body > .btn').click()
    cy.get(data.modal2Body).should('be.visible')
    cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').click()
    cy.get(data.modal2Body).should('not.be.visible')
  })
  it('Validate that a user can save the changes made on the second modal from the multiple modal example.', () => {
    cy.get('[href="#myModal"]').click()
    cy.get(data.modal1Body).should('be.visible')
    cy.get('.modal-body > .btn').click()
    cy.get(data.modal2Body).should('be.visible')
    cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(data.modal2Body).should('not.be.visible')
//  
  })
})