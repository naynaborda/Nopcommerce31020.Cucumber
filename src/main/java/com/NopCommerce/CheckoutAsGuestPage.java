package com.NopCommerce;

import org.openqa.selenium.By;

public class CheckoutAsGuestPage extends Utils {
    private By _checkOutAsGuest = By.xpath("//input[@class='button-1 checkout-as-guest-button']");

    public void clickOnCheckOutAsGuest() {
        //click on checkout as guest
        clickOnElement(_checkOutAsGuest);

    }
}
