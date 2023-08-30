package basicCode;


import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;


public class trelloBasicTest {

	public static void main(String[] args) throws InterruptedException {
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-popup-blocking");
		WebDriver driver=new ChromeDriver(options);
		String url="https://trello.com/";
		String email="arghajitsingha47@gmail.com";
		String passwordText="ArghajitTesting123";
		String boardTitle="Testing";
		String list1="List A";
		String list2="List B";
		String cardName="New Card";
		
		driver.navigate().to(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(2000, TimeUnit.MILLISECONDS);
		
		driver.findElement(By.cssSelector("header[data-testid='bignav'] a[href='/login']")).click();
		driver.findElement(By.id("user")).clear();
		driver.findElement(By.id("user")).sendKeys(email);
		driver.findElement(By.id("login")).click();
		Thread.sleep(4000);
		driver.findElement(By.id("password")).sendKeys(passwordText);
		driver.findElement(By.id("login-submit")).click();
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("li[data-testid='create-board-tile']")).click();
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("input[data-testid='create-board-title-input']")).sendKeys(boardTitle);
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("button[data-testid='create-board-submit-button']")).click();
		Thread.sleep(4000);
		Thread.sleep(4000);
		driver.findElement(By.className("list-name-input")).sendKeys(list1);
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("#board input[value='Add list']")).click();
		Thread.sleep(6000);
		driver.findElement(By.className("list-name-input")).sendKeys(list2);
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("#board input[value='Add list']")).click();
		Thread.sleep(4000);
		driver.findElement(By.cssSelector("#board a[class='open-card-composer js-open-card-composer']:nth-child(1)")).click();
		driver.findElement(By.cssSelector("#board div[class='list-card js-composer'] textarea")).sendKeys(cardName);
		driver.findElement(By.cssSelector("input[value='Add card']")).click();

		Actions act=new Actions(driver);
		WebElement from=driver.findElement(By.cssSelector("div > a > div[class='list-card-cover js-card-cover']"));
		WebElement to=driver.findElements(By.cssSelector("div > a > span[class='js-add-a-card']")).get(1);
		act.dragAndDrop(from, to).build().perform();
		Thread.sleep(4000);
		WebElement card=driver.findElement(By.cssSelector("div[class='list-card-details js-card-details']"));
		int x=card.getLocation().getX();
		int y=card.getLocation().getY();
		System.out.println("X point: "+x+" Y Point: "+y);

		driver.quit();
	}
	

}
