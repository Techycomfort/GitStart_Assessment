export default class GitStart {
    navigate() {
      cy.visit('https://developers.gitstart.com/');
    }
  
    clickBtn(path, textValue) {
      if (textValue) {
        return cy.contains(path).click();
      } else {
        return cy.get(path).click();
      }
    }
  
    click_register() {
      cy.contains('a', 'Register').should('have.attr', 'href', '/register').click();
    }
      
    validate_url(text) {
      cy.url().contains('include', text);
    }
      
    enter_email(email, selector) {
      cy.get(selector).clear();
      cy.get(selector).type(`${email}{enter}`);
      return this;
  
    }
  }