package com_Base_Class.Pack;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.util.logging.FileHandler;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Base_Class {
	public static WebDriver driver;// ----->null
	public static String value;// ---.null

	public static WebDriver browser_Configuration(String type) {
		if (type.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\Driver\\chromedriver.exe");
			driver = new ChromeDriver();
		} else if (type.equalsIgnoreCase("FireFox")) {
			System.setProperty("WebDriver.gecko.driver", System.getProperty("user.dir") + "\\Driver\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		return driver;
	}

	public static void clickOnElement(WebElement element) {

		element.click();
	}

	public static void inputValueElement(WebElement element, String data) {

		element.sendKeys(data);
	}

	public static void close() {
		driver.close();
	}

	public static void getUrl(String url) {
		driver.get(url);
	}

	public static void navigate(String url) {
		driver.navigate().to(url);
	}

	public static void wait(long time, TimeUnit unit) {
		driver.manage().timeouts().implicitlyWait(time, unit);
	}

	public static void select(WebElement element, String type, String value) {

		try {
			Select s = new Select(element);

			if (type.equalsIgnoreCase("ByValue")) {
				s.selectByValue(value);
			} else if (type.equalsIgnoreCase("ByText")) {
				s.selectByVisibleText(value);
			} else if (type.equalsIgnoreCase("ByIndex")) {
				int index = Integer.parseInt(value);
				s.selectByIndex(index);
			}
		} catch (NumberFormatException e) {

			e.printStackTrace();
		}

	}

	public static void screenshot(String image) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File destination = new File(
				"C:\\\\Users\\\\Lenovo\\\\eclipse-workspace\\\\Mainproject_march22\\\\Screenshot//" + image);
		FileUtils.copyFile(source, destination);
	}

	public static void javaScript() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scroll(0,500)", "");
	}

	public static void alert(String type) {
		Alert a = driver.switchTo().alert();
		if (type.equalsIgnoreCase("accept")) {
			a.accept();
		} else if (type.equalsIgnoreCase("prompt")) {
			a.sendKeys("alert");
			a.accept();
		} else {
			a.dismiss();
		}
	}

	public static void mouseOver(WebElement element) {
		Actions a = new Actions(driver);
		a.moveToElement(element).perform();
	}

	public static String particular_Cell_Data(String path,int rowindex,int cellindex) throws IOException {
		File f = new File(path);
		FileInputStream fis = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fis);
		Sheet s = wb.getSheetAt(0);
		Row r = s.getRow(rowindex);
		Cell c = r.getCell(cellindex);
		CellType type = c.getCellType();
		if (type.equals(CellType.STRING))
		{
			 value = c.getStringCellValue();
	    }
		else if (type.equals(CellType.NUMERIC))
		{
			double cellValue = c.getNumericCellValue();
			int value = (int) cellValue;
			System.out.println(value);
		}
		return value;


		
	}

	

}
