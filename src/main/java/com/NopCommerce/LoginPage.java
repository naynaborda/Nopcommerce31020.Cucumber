package com.NopCommerce;

import org.openqa.selenium.By;

public class LoginPage extends Utils{
    private By _email = By.id("Email");
    private By _password = By.id("Password");
    private By _logInBtn = By.xpath("//input[@class='button-1 login-button']");
    private By _account = By.linkText("My account");

    public void fillingLogInDetails() {
        //type registered email
        typeText(_email, RegistrationPage.email);
        //type password
        typeText(_password, "sitaram");


    }

    public void clickOnLoginButton() {
        //click on login button
        clickOnElement(_logInBtn);

    }

    public String logInConfirmationMessage() {
        //verify message for successful log in
        return (getText(_account));
    }


}
