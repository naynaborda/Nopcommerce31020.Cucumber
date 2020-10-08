package com.NopCommerce;

import org.openqa.selenium.By;

public class HomePage extends Utils{
    private By _registerButton = By.className("ico-register");
    private By _loginButton = By.className("ico-login");
    private By _apparelButton = By.linkText("Apparel");
    private By _bookButton = By.linkText("Books");
    private By _giftCardButton = By.linkText("Gift Cards");


    public void clickOnRegisterBtn() {
        clickOnElement(_registerButton);
    }

    public void clickOnLoginBtn() {
        //click on login
        clickOnElement(_loginButton);
    }

    public void clickOnApparel() {
        //click on Apparel
        clickOnElement(_apparelButton);

    }

    public void clickOnBook() {
        //click on book
        clickOnElement(_bookButton);
    }

    public void clickOnGiftCard() {
        //click on gift card button
        clickOnElement(_giftCardButton);
    }

}
