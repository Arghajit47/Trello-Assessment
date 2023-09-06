/// <reference types = "Cypress" />
import {
  TestDependencies,
  TestHands,
  TestEyes,
  Locator
} from "../robots/TestRobot/testRobot";
import properties from "../_utils/properties/index";

const testEyes = new TestEyes();
const testHands = new TestHands();
const testDependencies = new TestDependencies();
const baseUrl = properties.baseUrl;


context("Trello Testing", () => {
  beforeEach("Visit Trello Website", () => {
    cy.session("Login", () => {
      testDependencies.visitUrl(baseUrl);
      testEyes.seesLoginButton();
      testHands.clickOnLoginButton();
      testEyes.seesLoginPageCommonElements();
      testEyes.seesUserEmailFieldAndButton();
      testHands.typeUserMail();
      testHands.clickOnContinueButton();
      testEyes.seesPasswordFieldAndButton();
      testHands.typePassword();
      testHands.clickOnLoginSubmitButton();
      cy.document().its('cookie').should('contain', 'token');

    })
});
describe("Clean Up Test Scenario", () => {
    it("Permanently Delete the Board for Clean up", () => {
      testEyes.seesTrelloHomePage();
      testEyes.seesBoard("Automation");
      testHands.clickOnBoard("Automation");
      testHands.clickOnMenuOption();
      testHands.clickOnCloseBoardOption();
      testHands.clickOnCloseButton();
      testHands.clickOnPermanentlyDeleteBoard();
      testHands.clickOnConfirmDeleteBoard();
      cy.log("Done successfully");
    })
  });
});
