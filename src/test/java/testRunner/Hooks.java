package testRunner;

import com.NopCommerce.BasePage;
import com.NopCommerce.BrowserSelector;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    BrowserSelector browserSelector=new BrowserSelector();

    @Before
    public void openBrowser(){

        browserSelector.selectBrowser("Firefox");
        driver.get("https://demo.nopcommerce.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
    @After
    public void closeBrowser(){
       // driver.quit();
    }
}
