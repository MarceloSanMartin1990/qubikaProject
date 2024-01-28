import homePage from '../pages/homePage';

describe('End to end Qubika test challenge', () => {
  
  it('Challenge exercise 3', () => {
    
    // Step 1
    cy.visit('/')
    
    // Step 2
    cy.url().should('eq', 'https://qubika.com/').and
    homePage.logo.should('be.visible')
    
    // Step 3
    homePage.hamburgerIcon.click()
    cy.contains("Contact Us").click()

    // Step 4
    homePage.firstNameField.should('be.visible')
    homePage.emailField.should('be.visible')
    // Challenge said to validate "Get in touch" button,
    // but there isnt one, so I think that refers to submit button
    // In a real project I would confirm this with the PM
    // Or the one who wrote the ticket
    homePage.submitButton.scrollIntoView()
    .should('be.visible')

    // Step 5
    homePage.submitButton.click()

    // Step 6
    // I know there are 5 required fields so if I only want to see
    // if 5 required fields throw the warning text, then the following code should be fine
    // If I want to know which field didnt show the required text in case of failure 
    // then a different solution would be in order.
    homePage.requireWarning.should('have.length', 5);

    // Step 7
    // Here the challenge states: Validate that only 'Name' field is marked with red color
    // there is no Name field, maybe its the 'First Name' field, but that one is not marked
    // with any red color besides the required field warning text, so not really sure what to do here.
    // In a real project I would need more info from PM.

    // Step 8
    homePage.firstNameField.type("Test name")

    // Step 9
    homePage.submitButton.click()

    // Step 10
    // first we check that the 'First name' field has no warning and
    // then we check that 4 warnings are there.
    // Here is the full xpath for the First name warning locator 
    // /html/body/div[5]/div[3]/div/div/div[2]/form/fieldset[1]/div[1]/ul/li/label
    // not a good idea to work with anything close to that so I will go with the idea of
    // just checking that only 4 required warning are there, one could argue that I dont know which one
    // is missing, which might have some true in it, but since I enter text only on the First name field
    // I believe is safe to assume that the missing one will be the one for that field.
    // Best solution here and everywhere in the qubika page is to have data-test attributes in all locators
    // so for example first name field would be something like : data-test="first name" this attributes are often
    // use in testing and are the best option and practice for locators, even above IDs.

    homePage.requireWarning.should('have.length', 4);

    // Step 11
    // Here the challenge states: Validate that only 'Email' field is marked with red color,
    // but that one is not marked with any red color besides the required field warning text,
    // so not really sure what to do here.
    // In a real project I would need more info from PM.

  })
})