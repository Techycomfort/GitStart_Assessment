/// <reference types="cypress"/>
import GitStart from "../pageObject/pageObject.cy";

const handle = new GitStart()

describe("GitStart App Automation", () => {
    before(()=>{
        handle.navigate()
    })
    it("Access the Login Page", () => {
      cy.get('body').should('contain.text', 'Continue with email')
      cy.get('body').should('contain.text', 'Continue with Google')
    })

    it("Access the Signup Page", () => {
        handle.click_register()
    })

    it("Redirects to the Privacy Policy Page", ()=> {

    })

    it("Redirects to the Terms of Service Page", ()=> {

    })

    it("Can Signup with a valid email", ()=> {

    })

    it("Cannot Signup with an invalid email", ()=> {

    })

    it("Cannot Signup with an existing email", ()=> {

    })

    it("Receive Verification Email", ()=>{

    })

    it("Can Request a new Verification Email", ()=>{

    })

    it("Can Access Login Page from Signup Page", ()=> {

    })
})


