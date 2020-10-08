package com.NopCommerce;

import org.openqa.selenium.By;

public class RegisterResultPage extends Utils {
    private By _registrationConfirmationMessage = By.className("result");
    private By _logout = By.className("ico-logout");

    public String registrationConfirmationMessageText() {
        //verify message for successful registration
        return getText(_registrationConfirmationMessage);
    }

    public void logOut() {
        //click on logout
        clickOnElement(_logout);
    }
}
