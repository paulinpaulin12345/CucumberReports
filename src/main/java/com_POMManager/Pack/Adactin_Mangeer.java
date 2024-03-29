package com_POMManager.Pack;

import org.openqa.selenium.WebDriver;

import com_AdactinPom.Pack.Adactin_Book;
import com_AdactinPom.Pack.Adactin_Itenary;
import com_AdactinPom.Pack.Adactin_Log;
import com_AdactinPom.Pack.Adactin_Login;
import com_AdactinPom.Pack.Adactin_Search;
import com_AdactinPom.Pack.Adactin_Select;


public class Adactin_Mangeer {
	public WebDriver driver;
	private Adactin_Book AB;
	private Adactin_Itenary AI;
	private Adactin_Login AL;
	private Adactin_Search AS;
	private Adactin_Select Ase;
	private Adactin_Log Alog;
	public Adactin_Log getAlog() {
		if(Alog==null)
		{
			Alog=new Adactin_Log(driver);
		}
		return Alog;
	}
	public Adactin_Mangeer(WebDriver driver2) {
		this.driver=driver2;
	}
	public Adactin_Book getAB() {
		if(AB==null)
		{
			AB=new Adactin_Book(driver);
		}
		return AB;
	}
	public Adactin_Itenary get_AI() {
		if(AI==null)
		{
			AI=new Adactin_Itenary(driver);
		}
		
		return AI;
	}
	public Adactin_Login get_AL() {
		if(AL==null)
		{
			AL=new Adactin_Login(driver);
		}
		return AL;
	}
	public Adactin_Search get_AS() {
		if(AS==null)
		{
			AS=new Adactin_Search(driver);
		}
		return AS;
	}
	public Adactin_Select get_Ase() {
		if(Ase==null)
		{
			Ase=new Adactin_Select(driver);
		}
		return Ase;
	}
	

	
	
	



}
