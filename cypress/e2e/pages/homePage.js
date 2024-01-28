class HomePage {
    // Locators
    get logo() {
      return cy.get('a.logo');
    }
    get hamburgerIcon() {
      return cy.get('.hamburger');
    }
    get firstNameField() {
      return cy.get('[id^="firstname"]');
    }
    get emailField() {
      return cy.get('[id^="email"]');
    }
      get submitButton() {
        return cy.get('input[type="submit"]');
      }
      get requireWarning() {
        return cy.get('[class^="hs-error-msg"]');
      }
  
  }
  
  export default new HomePage();