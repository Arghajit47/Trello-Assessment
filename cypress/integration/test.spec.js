/// <reference types = "Cypress" />
import {
  TestDependencies,
  TestHands,
  TestEyes,
} from "../robots/TestRobot/testRobot";
import properties from "../_utils/properties/index";

const testEyes = new TestEyes();
const testHands = new TestHands();
const testDependencies = new TestDependencies();
const baseUrl = properties.baseUrl;


context("Trello Testing", () => {
  before("Visit Trello Website", () => {
    testDependencies.visitUrl(baseUrl);
});
describe("Login Scenario", () => {
    it("Login Scenario", () => {
      testEyes.seesLoginButton();
      testHands.clickOnLoginButton();
      testEyes.seesLoginPageCommonElements();
      testEyes.seesUserEmailFieldAndButton();
      testHands.typeUserMail();
      testHands.clickOnContinueButton();
      testEyes.seesPasswordFieldAndButton();
      testHands.typePassword();
      testHands.clickOnLoginSubmitButton();
      testEyes.seesTrelloHomePage();
      testHands.clickOnCreateBoardButton();
      testEyes.seesAllCreateOptions();
      testHands.clickOnCreateBoardOption();
      testHands.typeBoardName();
      testHands.clickOnCreateButton();
      testEyes.seesBoard();
      testHands.clickOnCreateNewList();
      testHands.typeNewListName("List A");
      testHands.clickOnAddListButton();
      testHands.typeNewListName("List B");
      testHands.clickOnAddListButton();
      testHands.clickOnCrossIcon();
      testHands.clickOnAddCard();
      testHands.typeCardName();
      testHands.clickOnAddCardButton();
      testHands.clickOnCancelCardIcon();
      testHands.dragAndDropTheCard();
      testHands.getCardCoordinates();
      testHands.clickOnOpenMemberMenu();
      testHands.clickOnLogOutOption();
      testHands.clickOnLogOutButton();
      cy.log("Done successfully");
    });
  });
});
