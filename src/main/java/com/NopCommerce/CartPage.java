package com.NopCommerce;

import org.openqa.selenium.By;

public class CartPage extends Utils {
    private By _termAndCondition = By.id("termsofservice");
    private By _checkOut = By.id("checkout");

    public void clickOnTermAndCondition() {
        //click on term and condition
        clickOnElement(_termAndCondition);

    }

    public void clickOnCheckOut() {
        //click on checkout
        clickOnElement(_checkOut);
    }
}
