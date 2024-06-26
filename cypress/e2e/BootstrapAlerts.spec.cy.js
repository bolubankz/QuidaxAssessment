let data

describe('Select Dropdown list', () => {
  beforeEach(()=>{
    cy.fixture('elements').then(sel=>{
      data = sel
    })
    //The code in the section clicks on Input form on the navbar and also proceeds to click on the simple form demo menu from the dropdown list
  cy.visit('/')
  cy.contains ('Alerts & Modals')
  cy.get('.navbar-right > :nth-child(2)').click()
  cy.get('.open > .dropdown-menu > :nth-child(1)').click()
})
  it('Validate that a user can click the auto-closeable success alert.', () => {
    cy.get('#autoclosable-btn-success').click()
    cy.get(data.closeableSuccessAlert).should('be.visible')
    cy.wait(5000)
    cy.get(data.closeableSuccessAlert).should('not.be.visible')
  })
  it('Validate that a user can click on the normal success alert.', () => {
    cy.get('#normal-btn-success').click()
    cy.get(data.normalSuccessAlert).should('be.visible')
    cy.get('.alert-normal-success > .close').click()
    cy.get(data.normalSuccessAlert).should('not.be.visible')
  })
  it('Validate that a user can click the auto-closeable warning alert.', () => {
    cy.get('#autoclosable-btn-warning').click()
    cy.get(data.closeableWarningAlert).should('be.visible')
    cy.wait(3000)
    cy.get(data.closeableWarningAlert).should('not.be.visible')
  })
  it('Validate that a user can click on the normal warning alert.', () => {
    cy.get('#normal-btn-warning').click()
    cy.get(data.normalWarningAlert).should('be.visible')
    cy.get('.alert-normal-warning > .close').click()
    cy.get(data.normalWarningAlert).should('not.be.visible')
  })
  it('Validate that a user can click the auto-closeable danger alert.', () => {
    cy.get('#autoclosable-btn-danger').click()
    cy.get(data.closeableDangerAlert).should('be.visible')
    cy.wait(5000)
    cy.get(data.closeableDangerAlert).should('not.be.visible')
  })
  it('Validate that a user can click on the normal danger alert.', () => {
    cy.get('#normal-btn-danger').click()
    cy.get(data.normalDangerAlert).should('be.visible')
    cy.get('.alert-normal-danger > .close').click()
    cy.get(data.normalDangerAlert).should('not.be.visible')
  })
  it('Validate that a user can click the auto-closeable info alert.', () => {
    cy.get('#autoclosable-btn-info').click()
    cy.get(data.closeableInfoAlert).should('be.visible')
    cy.wait(6000)
    cy.get(data.closeableInfoAlert).should('not.be.visible')
  })
  it('Validate that a user can click on the normal info alert.', () => {
    cy.get('#normal-btn-info').click()
    cy.get(data.normalInfoAlert).should('be.visible')
    cy.get('.alert-normal-info > .close').click()
    cy.get(data.normalInfoAlert).should('not.be.visible')
  })
})