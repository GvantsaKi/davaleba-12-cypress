// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("registracia", (userInfo) =>{
    cy.contains( "Signup / Login").click()
    cy.get('[data-qa="signup-name"]').type(userInfo.firstName)
    cy.get('[data-qa="signup-email"]').type(userInfo.email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender2').click()
    cy.get('[data-qa="password"]').type(userInfo.password)
    cy.get('[data-qa="days"]').select(userInfo.birthDate.day)
    cy.get('[data-qa="months"]').select(userInfo.birthDate.month)
    cy.get('[data-qa="years"]').select(userInfo.birthDate.year)
    cy.get('[data-qa="first_name"]').type(userInfo.firstName)
    cy.get('[data-qa="last_name"]').type(userInfo.lastName)
    cy.get('[data-qa="address"]').type(userInfo.address)
    cy.get('[data-qa="country"]').select(userInfo.country)
    cy.get('[data-qa="state"]').type(userInfo.state)
    cy.get('[data-qa="city"]').type(userInfo.city)
    cy.get('[data-qa="zipcode"]').type(userInfo.zipcode)
    cy.get('[data-qa="mobile_number"]').type(userInfo.mobileNumber)
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]').should(
      "have.text",
      "Account Created!"
    );
    cy.get('[data-qa="continue-button"]').click();
})


Cypress.Commands.add("logging", (userInfo) =>{
    cy.contains( "Signup / Login").click()
    cy.get(".login-form > h2").should("be.visible"); //შესასწორებელი
    cy.get('[data-qa="login-email"]').type(userInfo.email);
    cy.get('[data-qa="login-password"]').type(userInfo.password);
    cy.get('[data-qa="login-button"]').click();

})


Cypress.Commands.add("invalid", (incorrectInfo) =>{
    cy.contains( "Signup / Login").click()
    cy.get('.login-form > h2').should("be.visible"); //შესასწორებწლი
    cy.get('[data-qa="login-email"]').type(incorrectInfo.email);
    cy.get('[data-qa="login-password"]').type(incorrectInfo.password);
    cy.get('[data-qa="login-button"]').click();

})

