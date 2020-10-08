package com.NopCommerce;

import org.openqa.selenium.By;

public class RegistrationPage extends Utils {

    static String email ;
   // static String email1 = "Test1" + timeStamp() + "@test.com";

    private By _gender = By.id("gender-male");
    private By _firstName = By.id("FirstName");
    private By _lastName = By.id("LastName");
    private By _dateOfBirthDay = By.name("DateOfBirthDay");
    private By _dateOfBirthMonth = By.name("DateOfBirthMonth");
    private By _dateOfBirthYear = By.name("DateOfBirthYear");
    private By _email = By.id("Email");
    private By _password = By.id("Password");
    private By _confirmPassword = By.id("ConfirmPassword");
    private By _registerBtn = By.id("register-button");

    public void fillTheRegistrationForm(String firstName,String lastName) {
        //click on male
        clickOnElement(_gender);
        //type FirstName here we passing data from featureFile(scenario outline)
        typeText(_firstName,firstName);
        //type LastName here we passing data from featureFile(scenario outline)
        typeText(_lastName,lastName);
        //select Date of Birthday
        selectValueFromDropDown(_dateOfBirthDay, "2");
        //select Date of Month
        selectValueFromDropDown(_dateOfBirthMonth, "March");
        //select Date of year
        selectValueFromDropDown(_dateOfBirthYear, "1986");
        //type email
        email="test" + timeStamp() + "@test.com";
        typeText(_email, email);
        //type password
        typeText(_password, "sitaram");
        //type confirm password
        typeText(_confirmPassword, "sitaram");


    }

    public void clickOnRegisterButton1() {
        //click on register button
        clickOnElement(_registerBtn);
    }
    public void clickOnMale(){
        //click on male
        clickOnElement(_gender);

    }
    public void enterFirstName(String firstName){
        //here we passing firstName data from featureFile (scenario outline)
        typeText(_firstName,firstName);

    }
    public void enterLastName(String lastName){
        //here we passing lastName data from featureFile (scenario outline)
        typeText(_lastName,lastName);

    }
    public void selectDateOfBirth(){
        //select Date of Birthday
        selectValueFromDropDown(_dateOfBirthDay, "2");
        //select Date of Month
        selectValueFromDropDown(_dateOfBirthMonth, "March");
        //select Date of year
        selectValueFromDropDown(_dateOfBirthYear, "1986");

    }
    public void enterEmail(String featureFileEmail){
        //here we passing half email from featureFile (Scenario outline)
        email=featureFileEmail + timeStamp() + "@test.com";
        typeText(_email, email);

    }
    public void enterPassword(String password){
        //here we passing password from featureFile (Scenario outline)
        typeText(_password,password);

    }
    public void enterConfirmPassword(String confirmPassword){
        //here we passing confirmPassword from featureFile (Scenario outline)
        typeText(_confirmPassword,confirmPassword);


    }



}
