/// <reference types="cypress"/>
import GitStart from "../pageObject/pageObject.cy";


const handle = new GitStart()

describe("GitStart App Automation", () => {
    
    it("Access the Login Page", () => {
        handle.navigate()
      cy.get('body').should('contain.text', 'Continue with email')
      cy.get('body').should('contain.text', 'Continue with Google')
    })

    it("Access the Signup Page", () => {
        handle.navigate()
        handle.click_register()
        cy.get('body').should('contain.text', 'Continue with email')
        cy.get('body').should('contain.text', 'Continue with GitHub')
        cy.get('body').should('contain.text', 'Continue with Google')
    })

    it("Redirects to the Privacy Policy Page", ()=> {
        handle.navigateToPrivacyPolicy()
        handle.validate_url('https://gitstart.com/privacy-policy')
    })

    it("Redirects to the Terms of Service Page", ()=> {
        handle.navigateToTermsOfService()
        handle.validate_url("https://gitstart.com/terms")
    })

    it("Can Signup with a valid email", ()=> {
        handle.navigate()
        handle.click_register()
        cy.wait(10000)
        handle.clickBtn('Continue with email')
        cy.generateRandomEmail().then((email) => {
            cy.log(email); 
            handle.enter_email(email)
        });
        cy.wait(10000)
        handle.validate_url("https://developers.gitstart.com/verify_email")
        cy.contains("Check your spam folder")
       
    })

    it("Cannot Signup with an invalid email", ()=> {
        handle.navigate()
        handle.click_register()
        cy.wait(10000)
        handle.clickBtn('Continue with email')
        handle.enter_email('yep@mailinator')
        cy.wait(10000)
        handle.registerPage

    })

    it("Cannot Signup with an existing email", ()=> {
        handle.navigate()
        handle.click_register()
        cy.wait(10000)
        handle.clickBtn('Continue with email')
        handle.enter_email('hey@mailinator.com')
        cy.get('body').should("contain.text", "This email has already been registered with a user")
    })

    it("Cannot Signup with a Blank Email Field", ()=>{
        handle.navigate()
        handle.click_register()
        cy.wait(10000)
        handle.clickBtn('Continue with email')
        handle.validate_url("https://developers.gitstart.com/register")

    })

    it("Can be Redirected to Google Signup Page", ()=>{
        handle.navigate()
        handle.click_register()
        cy.wait(10000)
        handle.clickBtn('Continue with Google')

    })

    it("Can Access Login Page from Signup Page", ()=> {
        handle.registerPage
        handle.click_login
    })
})


