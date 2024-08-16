export default class GitStart {
    navigate() {
      cy.visit('https://developers.gitstart.com/');
    }

    registerPage() {
        cy.visit('https://developers.gitstart.com/register')
    }
  
    clickBtn(text) {
        cy.contains('button', text).click();
    }
  
    click_register() {
      cy.contains('a', 'Register').should('have.attr', 'href', '/register').click();
    }

    click_login() {
        cy.contains('a', 'Log In').should('have.attr', 'href', '/').click();
      }
      
    validate_url(link) {

      cy.url().should('eq', link)
    }

    enter_email(email) {
      cy.get("input[placeholder='name@example.com']").clear();
      cy.get("input[placeholder='name@example.com']").type(`${email}{enter}`);
      return this;

    }

   
    navigateToPrivacyPolicy(){
        cy.visit('https://developers.gitstart.com/register');
    cy.get('a[href="https://gitstart.com/privacy-policy"]').then(($link) => {
      const url = $link.prop('href');
      cy.visit(url);
    });
    }

    navigateToTermsOfService(){
        cy.visit('https://developers.gitstart.com/register');
    cy.get('a[href="https://gitstart.com/terms"]').then(($link) => {
      const url = $link.prop('href');
      cy.visit(url);
    });
    }

      
  }
