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
    const navbarList = ["Back to home", "Workspaces", "Recent boards", "Starred boards", "Templates", "Create board or Workspace", "Open member menu"]
    for (var i = 0; i < 7; i++) {
        this.seesDomVisible(`[aria-label="${navbarList[i]}"]`);
    }
    this.seesDomVisible('input[placeholder="Search"]');
    this.seesDomVisible('li[data-testid="create-board-tile"]');
    this.seesDomContainText('div > h3', "YOUR WORKSPACES");
  }
  seesAllCreateOptions() {
    const options = ["Create board", "Start with a template", "Create Workspace"];

    for(var i = 0; i < 3; i++) {
        this.seesDomContainText('ul > li > button > span', options[i]);
    }
  }
  seesBoard() {
    this.seesDomVisible('div [data-testid="list-composer-button"]')
  }
  seesCardLocation () {
    this.seesLocationOfDomElement('div > a[data-testid="trello-card"]');
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
    this.wait(5000);
  }
  clickOnContinueButton() {
    this.clickOnDomElement('input[id="login"]');
    this.wait(6000);
  }
  typePassword() {
    this.typeTextonDom('input[id="password"]', password);
    this.wait(5000);
  }
  clickOnLoginSubmitButton() {
    this.clickOnDomElement('button[id="login-submit"]');
    this.wait(10000);
  }
  clickOnCreateBoardButton() {
    this.clickOnDomElement('button[aria-label="Create board or Workspace"]');
    this.wait(2000);
  }
  typeBoardName() {
    this.typeTextonDom('section [data-testid="create-board-title-input"]', "New Board");
    this.wait(1000);
  }
  clickOnCreateButton() {
    this.clickOnDomElement('[data-testid="create-board-submit-button"]');
    this.wait(5000);
  }
  clickOnCreateBoardOption() {
    this.clickOnDomContainText('ul > li > button > span', 'Create board');
    this.wait(1000);
  }
  clickOnCreateNewList() {
    this.clickOnDomElement('div [data-testid="list-composer-button"]');
    this.wait(1000);
  }
  typeNewListName(name) {
    this.typeTextonDom('input[name="name"]', name);
    this.wait(1000);
  }
  clickOnAddListButton() {
    this.clickOnDomElement('input[value="Add list"]');
    this.wait(1000);
  }
  clickOnCrossIcon() {
    this.clickOnDomElement('[aria-label="Cancel list editing"]');
    this.wait(1000);
  }
  clickOnAddCard() {
    this.clickOnDomElementWithIndex('[data-testid="list-add-card-button"]', 3);
    this.wait(1000);
  }
  typeCardName() {
    this.typeTextonDom('[data-testid="list-card-composer-textarea"]', "New Card");
    this.wait(1000);
  }
  clickOnAddCardButton() {
    this.clickOnDomElement('input[value="Add card"]');
    this.wait(1000);
  }
  clickOnCancelCardIcon() {
    this.clickOnDomElement('div[class="cc-controls-section"] > a[href="#"]');
    this.wait(1000);
  }
  dragAndDropNewCard() {
    this.dragAndDropElement('div > a[data-testid="trello-card"]', 'div#board>div:nth-of-type(5)>div>div:nth-of-type(2)');
    this.wait(1000);
  }
  clickOnOpenMemberMenu() {
    this.clickOnDomElement('[aria-label="Open member menu"]');
    this.wait(1000);
  }
  clickOnLogOutOption() {
    this.clickOnDomElement('[data-testid="account-menu-logout-section"]');
    this.wait(1000);
  }
  clickOnLogOutButton() {
    this.clickOnDomElement('[id="logout-submit"]')
  }
  dragAndDropTheCard() {
    cy.get('div[data-list-index="0"] .list-card').trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: 600, clientY: 0 })
          .trigger('mouseup');
  }
  getCardCoordinates() {
    this.getElementCoordinate('div[data-list-index="1"] .list-card');
  }
}
export class TestDependencies extends BaseDependencies {}
