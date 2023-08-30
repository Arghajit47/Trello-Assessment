package TrelloLocatorPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BoardLandingPageLocator {

	WebDriver driver;
	public By listTitle=By.className("list-name-input");
	public By addListBtn=By.cssSelector("#board input[value='Add list']");
	public By addCard= By.cssSelector("#board a[class='open-card-composer js-open-card-composer']:nth-child(1)");
	public By cardTitle=By.cssSelector("#board div[class='list-card js-composer'] textarea");
	public By addCardBtn=By.cssSelector("input[value='Add card']");
	public By cardFrom=By.cssSelector("div > a > div[class='list-card-cover js-card-cover']");
	public By cardTo=By.cssSelector("div > a > span[class='js-add-a-card']");
	public By cardLocation=By.cssSelector("div[class='list-card-details js-card-details']");
	public By profileBtn=By.cssSelector("button[data-testid='header-member-menu-button']");
	public By logoutBtn=By.cssSelector("button[data-testid='account-menu-logout']");
	public By logoutBtnMain=By.id("logout-submit");
	public BoardLandingPageLocator(WebDriver driver)
	{
		this.driver=driver;
	}
}
