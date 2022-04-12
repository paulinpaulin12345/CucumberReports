package com.Step_def;


import org.openqa.selenium.WebDriver;

import com.Adactin.Runner.Adactin_Runner;
import com.configuration.helper.File1_Reader_Manager;

import com_Base_Class.Pack.Base_Class;
import com_POMManager.Pack.Adactin_Mangeer;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Def extends Base_Class {
	public static WebDriver driver=Adactin_Runner.driver;//null
	public static Adactin_Mangeer pom=new Adactin_Mangeer(driver);
	
	
	 
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		
		String url=File1_Reader_Manager.get_Instance_Frm().get_Instance_CR().get_confi_url();
		getUrl(url);
	   }
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable {
		String email=File1_Reader_Manager.get_Instance_Frm().get_Instance_CR().get_confi_email();
		inputValueElement(pom.get_AL().getMailid(),username);
	   
	}
	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String pass) throws Throwable {
		String password=File1_Reader_Manager.get_Instance_Frm().get_Instance_CR().get_confi_passwrd();
		inputValueElement(pom.get_AL().getPassword(), pass);
	    
	}

	
	

	@Then("^user Click On The Login Button And It Navigates To The Search Hotel$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel() throws Throwable {
		clickOnElement(pom.get_AL().getLoginbtn());
		
	}
	@When("^user Enter The HotelLocation$")
	public void user_Enter_The_HotelLocation() throws Throwable {
		select(pom.get_AS().getLocation(), "ByIndex", "2");
	    
	}

	



	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {
		select(pom.get_AS().getHotel(), "ByValue", "Hotel Cornice");
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		select(pom.get_AS().getRoomtype(), "ByText", "Super Deluxe");
		
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		select(pom.get_AS().getNoofroom(), "Byvalue", "2");
		
	}

	@When("^user Select Check In Date$")
	public void user_Select_Check_In_Date() throws Throwable {
		System.out.println("Check_In_Date: 09/4/2022");
	   
	}

	@When("^user Select Check Out Date$")
	public void user_Select_Check_Out_Date() throws Throwable {
		System.out.println("CheckOutDtae: 10/4/2022");
	    	}

	@When("^user Select Adults Per Room$")
	public void user_Select_Adults_Per_Room() throws Throwable {
		select(pom.get_AS().getAdultroom(), "ByText", "2 - Two");
		
	}

	@When("^user Select Children Per Room$")
	public void user_Select_Children_Per_Room() throws Throwable {
		select(pom.get_AS().getChildroom(), "ByIndex", "0");
		
	}

	@Then("^user Click On Search Button And It Navigates To The Select Hotel$")
	public void user_Click_On_Search_Button_And_It_Navigates_To_The_Select_Hotel() throws Throwable {
		clickOnElement(pom.get_AS().getSubmit());
		Thread.sleep(500);
	}

	@When("^user Click Option Button$")
	public void user_Click_Option_Button() throws Throwable {
		clickOnElement(pom.get_Ase().getBtn1());
		
	}

	@Then("^user Click On Continue Button And It Navigates To The Book Hotel$")
	public void user_Click_On_Continue_Button_And_It_Navigates_To_The_Book_Hotel() throws Throwable {
		clickOnElement(pom.get_Ase().getBtn2());
		
	}

	@When("^user Enter Firstname$")
	public void user_Enter_Firstname() throws Throwable {
		inputValueElement(pom.getAB().getFname(), "Ammu");
		
	}

	@When("^user Enter Lastname$")
	public void user_Enter_Lastname() throws Throwable {
		inputValueElement(pom.getAB().getLname(), "Kutty");
		
	   	}

	@When("^user Enter Billing Address$")
	public void user_Enter_Billing_Address() throws Throwable {
		inputValueElement(pom.getAB().getAddres(), " No1.Everest Garden ,Errandam Kattalai,Koovoor,Chennai-600128");

		
	}

	@When("^user Enter Card Number$")
	public void user_Enter_Card_Number() throws Throwable {
		inputValueElement(pom.getAB().getCreditno(), "1111 1111 1111 1111");
		
	}

	@When("^user Enter Card Type$")
	public void user_Enter_Card_Type() throws Throwable {
		select(pom.getAB().getCardtype(), "ByValue", "MAST");
	
	}

	@When("^user Select Month$")
	public void user_Select_Month() throws Throwable {
		select(pom.getAB().getExpmonth(), "ByText", "November");
		
	}

	@When("^user Select Year$")
	public void user_Select_Year() throws Throwable {
		select(pom.getAB().getExpyear(), "ByValue", "2022");
		
	}

	@When("^user Select Cvv Number$")
	public void user_Select_Cvv_Number() throws Throwable {
		inputValueElement(pom.getAB().getNo(), "123446");
		
	}

	@Then("^user Click Booknow Button And It Navigates To The Booking Confirm$")
	public void user_Click_Booknow_Button_And_It_Navigates_To_The_Booking_Confirm() throws Throwable {
		clickOnElement(pom.getAB().getBookbtn());
		
	}

	@Then("^user Click Itenary Button And It Navigate To The Booked Itenary$")
	public void user_Click_Itenary_Button_And_It_Navigate_To_The_Booked_Itenary() throws Throwable {
		navigate("https://adactinhotelapp.com/BookedItinerary.php");
		
	}

	@When("^user Click Check Box$")
	public void user_Click_Check_Box() throws Throwable {
		clickOnElement(pom.get_AI().getOptbtn1());

	}

	@Then("^user Click Logout Button And It Navigates To The LogOut$")
	public void user_Click_Logout_Button_And_It_Navigates_To_The_LogOut() throws Throwable {
		clickOnElement(pom.get_AI().getLogoutbtn());
		}

	@When("^user Click Click Here To Login Again And It Navigates To Login Page$")
	public void user_Click_Click_Here_To_Login_Again_And_It_Navigates_To_Login_Page() throws Throwable {
	    
		clickOnElement(pom.getAlog().getLogg());
		
	}


	
	

}
