import userInfo from "../fixtures/registration.json"
import incorrectInfo from "../fixtures/incorrect.json"
describe('automation exercise', () => {
  it('register user', () => {
    cy.visit('/')
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible");
    cy.registracia(userInfo)
    cy.get("a > b").should("have.text", "Gvantsa"); //შესასწორებელი
  })


  it('Login User with correct email and password', () => {
    cy.visit('/')
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.logging(userInfo)
    cy.get("a > b").should("have.text", "Gvantsa"); //შესასწორებელი


  })

  it("Login User with incorrect email and password", () => {
    cy.visit('/');
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.invalid(incorrectInfo)
    cy.get('.login-form > form > p').should("have.text", "Your email or password is incorrect!"); //შესასწორებელი
    
  });



})