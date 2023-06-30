//<reference types="cypress" />;
describe("My First Test", () => {
  it("user success login", () => {
    cy.visit("https://kasirdemo.belajarqa.com");
    // cy.url().should("eq", "https://kasirdemo.belajarqa.com"); // Verify that the URL matches the expected value
    cy.get("#email").type("12345@gmail.com");
    cy.get("#email").should("have.value", "12345@gmail.com");
    cy.get("#password").type("12345");
    cy.get("#password").should("have.value", "12345");
    cy.get(".chakra-button").click();
    console.log();
  });
  it("user failed login", () => {
    cy.visit("https://kasirdemo.belajarqa.com");
    cy.get("#email").type("12345@.com");
    cy.get("#email").should("have.value", "12345@.com");
    cy.get("#password").type("12345");
    cy.get("#password").should("have.value", "12345");
    cy.get(".chakra-button").click();
    cy.get(".chakra-alert");
  });
});
