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
const locator = new Locator();
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
describe("Test Scenario", () => {
    it("Test Scenario", () => {
      testEyes.seesTrelloHomePage();
      testEyes.seesCreateNewBoard();
      testHands.clickOnCreateNewBoard();
      testEyes.seesBoardTitleInputField();
      testEyes.seesCreateButton();
      testHands.typeTextOnBoardTitle("Automation");
      testHands.clickOnCreateButton();
    });
    it("Test Scenario 2", () => {
      testEyes.seesTrelloHomePage();
      testEyes.seesBoard("Automation");
      testHands.clickOnBoard("Automation");
      testHands.clickOnAddListButton();
      testHands.setListTitle("List 1");
      testHands.clickOnAddListButton();
      testHands.setListTitle("List 2");
      testHands.clickOnAddListButton();
      testHands.clickOnCloseAddList();
      testHands.clickOnAddCard();
      testHands.setCardTitle("New Card");
      testHands.clickOnAddCardButton();
      testHands.clickOnCloseAddCard();
      testHands.dragAndDropTheCard(locator.cardFrom, locator.cardTo);
      testHands.getCardCoordinates();
      testHands.clickOnProfileButton();
      testHands.clickOnLogOutOption();
      testHands.clickOnLogOutButton();
      cy.log("Done successfully");
    })
  });
});
