import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Then("this focused scenario should run", () => {
  cy.log('this focused scenario should run');
});

Then("this unfocused scenario should not run", () => {
  cy.log('this unfocused scenario should not run');
});
