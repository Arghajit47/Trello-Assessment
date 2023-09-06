import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";
import properties from "../../_utils/properties/index";

const userEmail = properties.userEmail;
const password = properties.password;

export class TestEyes extends BaseEyes {
  seesLoginButton() {
    this.seesDomElementXpathWithIndex("//div/a[contains(text(), 'Log in')]", 0);
  }
  seesUserEmailFieldAndButton() {
    this.seesDomEnabled('input[id="user"]');
    this.seesDomVisible('input[id="login"]');
  }
  seesPasswordFieldAndButton() {
    this.seesDomEnabled('input[id="password"]');
    this.seesDomVisible('button[id="login-submit"]');
  }
  seesLoginPageCommonElements() {
    this.seesDomVisible('[alt="Trello"]');
    this.seesDomContainText('h1', 'Log in to Trello');
    this.seesDomContainText('div > a[id="googleButton"] > span', "Continue with Google");
    this.seesDomContainText('div > a[id="msftButton"] > span', "Continue with Microsoft");
    this.seesDomContainText('div > a[id="signInWithAppleButton"] > span', "Continue with Apple");
    this.seesDomContainText('div > a[id="slackButton"] > span', "Continue with Slack");
    this.seesDomContainText('ul > li > a', "Can't log in?");
  }
  seesTrelloHomePage() {
    cy.visit('/', {timeout: 120000});
    const navbarList = ["Back to home", "Workspaces", "Recent boards", "Starred boards", "Templates", "Create board or Workspace", "Open member menu"]
    for (var i = 0; i < 7; i++) {
        this.seesDomVisible(`[aria-label="${navbarList[i]}"]`);
    }
    this.seesDomVisible('input[placeholder="Search"]');
    this.seesDomVisible('li[data-testid="create-board-tile"]');
    this.seesDomContainText('div > h3', "YOUR WORKSPACES");
  }
  seesCreateNewBoard() {
    this.seesDomVisible('[data-testid="create-board-tile"]');
  }
  seesBoardTitleInputField() {
    this.seesDomVisible("input[data-testid='create-board-title-input']");
  }
  seesCreateButton() {
    this.seesDomVisible("button[data-testid='create-board-submit-button']");
    cy.wait(5000);
  }
  seesBoard(name) {
    this.seesDomElementWithXpath(`//a[.='${name}']`)
  }
  
}
export class TestHands extends BaseHands {
  clickOnLoginButton() {
    cy.intercept("GET", "https://trello.com/login").as("graphqlRequest");
    this.clickOnDomElementXpathWithIndex("//div/a[contains(text(), 'Log in')]",0);
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
      if (response.statusCode == 200) {
        cy.log("Welcome to Login Page");
      } 
    });
  }
  typeUserMail() {
    this.typeTextonDom('input[id="user"]', userEmail);
    
  }
  clickOnContinueButton() {
    this.clickOnDomElement('input[id="login"]');
    
  }
  typePassword() {
    this.typeTextonDom('input[id="password"]', password);
    
  }
  clickOnLoginSubmitButton() {
    this.clickOnDomElement('button[id="login-submit"]');
    cy.wait(8000);
  }
  clickOnCreateNewBoard() {
    cy.wait(6000);
    this.clickOnDomElementWithXpath("//span[text()='Create new board']")
  }
  typeTextOnBoardTitle(name) {
    this.typeTextonDom("input[data-testid='create-board-title-input']", name);
  }
  clickOnCreateButton() {
    this.clickOnDomElement("button[data-testid='create-board-submit-button']");
    cy.wait(5000);
  }
  setListTitle(title) {
    this.typeTextonDom(".list-name-input", title);
  }
  clickOnAddListButton() {
    this.clickOnDomElement("#board input[value='Add list']");
    cy.wait(2000);
  }
  clickOnAddCard() {
    this.clickOnDomElementWithIndex("#board a[class='open-card-composer js-open-card-composer']", 0);
  }
  setCardTitle(cardName) {
    this.typeTextonDom("#board div[class='list-card js-composer'] textarea", cardName);
  }
  clickOnAddCardButton() {
    this.clickOnDomElement("input[value='Add card']");
  }
  clickOnProfileButton() {
    this.clickOnDomElement("button[data-testid='header-member-menu-button']");
    cy.wait(2000);
  }
  clickOnLogOutOption() {
    this.clickOnDomElement("button[data-testid='account-menu-logout']");
  }
  clickOnLogOutButton() {
    this.clickOnId("logout-submit");
  }
  dragAndDropTheCard(item, target) {
    cy.get(item).drag(target, {force: true});
    cy.wait(2000);
  }
  getCardCoordinates() {
    this.getElementCoordinate("div[class='list-card-details js-card-details']");
  }
  clickOnCloseAddList() {
    this.clickOnDomElement('div>a[aria-label="Cancel list editing"]');
    cy.wait(2000);
  }
  clickOnCloseAddCard() {
    this.clickOnDomElement('div[class="cc-controls-section"] > a[href="#"]');
    cy.wait(2000);
  }
  clickOnBoard(name) {
    this.clickOnDomElementWithXpath(`//a[.='${name}']`)
  }
  clickOnMenuOption() {
    this.clickOnDomElement('button[aria-label="Show menu"]');
  }
  clickOnCloseBoardOption() {
    this.clickOnDomElement('span.icon-sm.icon-remove');
  }
  clickOnCloseButton() {
    this.clickOnDomElement('input[value="Close"]');
  }
  clickOnPermanentlyDeleteBoard() {
    this.clickOnDomElement("button[data-testid='close-board-delete-board-button']");
  }
  clickOnConfirmDeleteBoard() {
    this.clickOnDomElement("button[data-testid='close-board-delete-board-confirm-button']");
  }
}
export class TestDependencies extends BaseDependencies {}

export class Locator {
  cardFrom = "div > a > div[class='list-card-cover js-card-cover']";
  cardTo = "div > a > span[class='js-add-a-card']";
}
