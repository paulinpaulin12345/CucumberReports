package com.Adactin.Runner;


import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com_Base_Class.Pack.Base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features="src\\test\\java\\com\\Adactin\\Features\\Adactin.feature",
		glue="com.Step_def",
		monochrome=true,
		dryRun=false,
		strict=true,
		plugin= {
				//"html:Cucumber_Reports/Adactin_Report",
		        //"json:Cucumber_Reports/Adactinjson.json"
				//"pretty"
				"com.cucumber.listener.ExtentCucumberFormatter:Reports/Adact.html"
		        
		}
		)
public class Adactin_Runner {
	public static WebDriver driver;//null
	
	@BeforeClass
	public static void set_Up()
	{
		driver=Base_Class.browser_Configuration("Chrome");
		
	}
	@AfterClass
	public static void tear_Down()
	{
		
		driver.close();
	}

}
