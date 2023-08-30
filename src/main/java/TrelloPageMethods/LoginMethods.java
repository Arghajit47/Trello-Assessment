package TrelloPageMethods;
import org.openqa.selenium.WebDriver;

import TrelloLocatorPages.LoginPageLocator;
public class LoginMethods {

	WebDriver driver;
	LoginPageLocator loginPage=new LoginPageLocator(driver);
	
	public LoginMethods(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void clickMainLogin()
	{
		driver.findElement(loginPage.loginBtnMain).click();
		
	}
	public void seesMainLogin() {
		driver.findElement(loginPage.loginBtnMain).isDisplayed();
	}
	public void seesLoginPageCommonElements() {
		driver.findElement(loginPage.trelloLogo).isDisplayed();
		driver.findElement(loginPage.trelloWelcomeText).getText().equals("Log in to Trello");
		driver.findElement(loginPage.signUpWithGoogle).isDisplayed();
		driver.findElement(loginPage.signUpWithMicrosoft).isDisplayed();
		driver.findElement(loginPage.signUpWithApple).isDisplayed();
		driver.findElement(loginPage.signUpWithSlack).isDisplayed();
	}
	public void setEmail(String email)
	{
		driver.findElement(loginPage.email).sendKeys(email);
	}
	public void clickContinueBtn()
	{
		driver.findElement(loginPage.contBtn).click();
		
	}
	public void clickLoginBtn()
	{
		driver.findElement(loginPage.loginBtn).click();
		
	}
	public void setPassword(String password)
	{
		driver.findElement(loginPage.password).sendKeys(password);
	}
	
}
