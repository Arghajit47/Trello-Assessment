package TrelloTestCases;

import TrelloPageMethods.LoginMethods;
import TrelloPageMethods.WorkSpaceMethods;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;
import java.io.*;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class AssessmentTaskWithPOM {


    WebDriver driver = new ChromeDriver();
    Properties props = new Properties();
    FileInputStream fis;
    LoginMethods login;
    WorkSpaceMethods workSpace;


    {
        try {
            String currentDirectory = System.getProperty("user.dir");
            fis = new FileInputStream(currentDirectory + "/src/main/java/Resources/data.properties");
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    @BeforeSuite
    public void setUp() throws Exception {
        props.load(fis);
        driver.manage().window().maximize();
        driver.get(props.getProperty("baseUrl"));
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);


    }

    @BeforeTest
    public void Login() throws Exception {
        props.load(fis);
        login = new LoginMethods(driver);
        login.seesMainLogin();
        login.clickMainLogin();
        login.seesLoginPageCommonElements();
        login.setEmail(props.getProperty("userEmail"));
        login.clickContinueBtn();
        Thread.sleep(5000);
        login.setPassword(props.getProperty("password"));
        login.clickLoginBtn();
    }

    @Test(priority = 1)
    public void createBoard() throws Exception {
        props.load(fis);
        workSpace = new WorkSpaceMethods(driver);
        workSpace.clickOnCreateBoard();
        Thread.sleep(2000);
        workSpace.setBoardTitle(props.getProperty("boardName"));
        workSpace.clickOnCreateBtn();

    }

    @Test(priority = 2)
    public void createList() throws Exception {
        props.load(fis);
        workSpace = new WorkSpaceMethods(driver);
        workSpace.setListTitle(props.getProperty("listName1"));
        workSpace.clickOnAddListBtn();
        Thread.sleep(4000);
        workSpace.setListTitle(props.getProperty("listName2"));
        workSpace.clickOnAddListBtn();
    }

    @Test(priority = 3)
    public void createCard() throws Exception {
        props.load(fis);
        workSpace = new WorkSpaceMethods(driver);
        workSpace.clickOnAddCard();
        workSpace.setCardTitle(props.getProperty("cardName"));


        workSpace.clickOnAddCardBtn();
    }

    @Test(priority = 4)
    public void moveCard() throws Exception {
        workSpace = new WorkSpaceMethods(driver);
        workSpace.dragAndDropCard();
        workSpace.getCoordinate();
    }

    @AfterTest
    public void LogOut() {
        workSpace = new WorkSpaceMethods(driver);
        workSpace.clickOnProfileMenu();
        workSpace.clickOnLogOut();
    }

    @AfterSuite
    public void tearDown() {
        driver.close();
        driver.quit();
    }
}
