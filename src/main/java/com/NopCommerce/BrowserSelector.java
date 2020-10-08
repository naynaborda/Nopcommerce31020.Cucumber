package com.NopCommerce;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserSelector extends Utils{
    //static String browserName="Firefox";
    public void selectBrowser(String browserName){
        if (browserName.equalsIgnoreCase("firefox")){
            System.setProperty("webdriver.gecko.driver","src\\test\\resources\\browserDrivers\\geckodriver.exe");
            driver=new FirefoxDriver();
        }else {
            System.setProperty("webdriver.chrome.driver","src\\test\\resources\\browserDrivers\\chromedriver.exe");
            driver=new ChromeDriver();
        }

    }
}
