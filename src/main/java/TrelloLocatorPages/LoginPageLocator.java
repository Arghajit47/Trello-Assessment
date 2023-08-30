package TrelloLocatorPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPageLocator {
	WebDriver driver;
	
	
	public By loginBtnMain= By.cssSelector("header[data-testid='bignav'] a[href='/login']");
	public By email=By.id("user");
	public By password=By.id("password");
	public By contBtn=By.id("login");
	public By loginBtn=By.id("login-submit");
	public By trelloLogo=By.cssSelector("[alt=\"Trello\"]");
	public By trelloWelcomeText=By.cssSelector("h1");
	public By signUpWithGoogle=By.id("googleButton");
	public By signUpWithMicrosoft=By.id("msftButton");
	public By signUpWithApple=By.id("signInWithAppleButton");
	public By signUpWithSlack=By.id("slackButton");
	
	public LoginPageLocator(WebDriver driver)
	{
		this.driver=driver;
	}

}
