package com.NopCommerce;

import org.openqa.selenium.By;

public class OnePageCheckOutPage extends Utils {
    private By _firstName = By.id("BillingNewAddress_FirstName");
    private By _lastName = By.id("BillingNewAddress_LastName");
    private By _email = By.xpath("//input[@id='BillingNewAddress_Email']");
    private By _country = By.xpath("//select[@id='BillingNewAddress_CountryId']");
    private By _city = By.id("BillingNewAddress_City");
    private By _address = By.id("BillingNewAddress_Address1");
    private By _postCode = By.id("BillingNewAddress_ZipPostalCode");
    private By _phoneNumber = By.id("BillingNewAddress_PhoneNumber");
    private By _continueBilling = By.xpath("//div[@id='billing-buttons-container']//input[@class='button-1 new-address-next-step-button']");
    private By _continueShipping = By.cssSelector("div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.checkout-page div.page-body.checkout-data ol.opc li.tab-section.allow.active:nth-child(3) div.step.a-item form:nth-child(1) div.buttons:nth-child(2) > input.button-1.shipping-method-next-step-button");
    private By _creditCard = By.xpath("//input[@id='paymentmethod_1']");
    private By _continueOpcPaymentMethod = By.xpath("//input[@class='button-1 payment-method-next-step-button']");
    private By _selectCreditCard = By.id("CreditCardType");
    private By _cardHolderName = By.id("CardholderName");
    private By _cardNumber = By.id("CardNumber");
    private By _selectExpireMonth = By.id("ExpireMonth");
    private By _selectExpireYear = By.id("ExpireYear");
    private By _cardCode = By.id("CardCode");
    private By _continueOpcPaymentInfo = By.xpath("//input[@class='button-1 payment-info-next-step-button']");
    private By _confirmOrder = By.cssSelector("div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.center-1 div.page.checkout-page div.page-body.checkout-data ol.opc li.tab-section.allow.active:nth-child(6) div.step.a-item div.buttons:nth-child(2) > input.button-1.confirm-order-next-step-button");


    public void fillingPersonalDetailsForCheckOut() {
        //Enter FirstName
        typeText(_firstName, "Raj");
        //Enter LastName
        typeText(_lastName, "Kapoor");
        //Enter Email
        typeText(_email, "rajkapoor@test.com");
        //Select Country
        selectValueFromDropDown(_country, "United Kingdom");
        //Enter CityName
        typeText(_city, "London");
        //Enter AddressLine 1
        typeText(_address, "606 ShivNagar");
        //Enter PostCode
        typeText(_postCode, "fg5 9lo");
        //Enter PhoneNumber
        typeText(_phoneNumber, "08965434875");


    }
    public void enterFirstName(String firstName){
        //Enter FirstName passing data from scenario outline
        typeText(_firstName,firstName);

    }
    public void enterLastName(String lastName){
        //Enter lastName passing data from scenario outline
        typeText(_lastName,lastName);


    }
    public void enterEmail(String email){
        //Enter Email passing data from scenario outline
        typeText(_email,email);

    }
    public void selectCountry(String country){
        //Select Country passing data from scenario outline
        selectValueFromDropDown(_country,country);

    }
    public void enterCity(String city){
        //Enter CityName passing data from scenario outline
        typeText(_city, city);
    }
    public void enterAddress1(String address){
        //Enter AddressLine 1 passing data from scenario outline
        typeText(_address,address);

    }
    public void enterPostCode(String postCode){
        //Enter PostCode passing data from scenario outline
        typeText(_postCode, postCode);

    }
    public void enterPhoneNumber(String phoneNumber){
        //Enter PhoneNumber passing data from scenario outline
        typeText(_phoneNumber, phoneNumber);
    }


    public void clickOnContinueFromOnePageCheckoutPage() {
        //Click on Continue from one page checkout
        clickOnElement(_continueBilling);

    }

    public void clickOnContinueFromShippingPage() {
        //Click on Continue From Shipping page
        clickOnElement(_continueShipping);

    }

    public void clickOnCreditCard() {
        //Click on CreditCard  From Opc-Payment-Method Page
        clickOnElement(_creditCard);

    }

    public void clickOnContinueFromOpcPaymentMethodPage() {
        //Click on Continue From Opc-Payment-Method Page
        clickOnElement(_continueOpcPaymentMethod);

    }

    public void addCardDetails() {
        //Add Card Details
        //Select Credit Card Type
        selectValueFromDropDown(_selectCreditCard, "Master card");
        //Enter CardHolder Name
        typeText(_cardHolderName, "Mr Raj");
        //Enter Card Number
        typeText(_cardNumber, "378282246310005");
        //Select Expire Month
        selectValueFromDropDown(_selectExpireMonth, "02");
        //Select Expire Year
        selectValueFromDropDown(_selectExpireYear, "2021");
        //Enter Card Code
        typeText(_cardCode, "324");

    }
    public void selectCardType(String cardType){
        //Select Credit Card Type passing data from scenario outline
        selectValueFromDropDown(_selectCreditCard,cardType);

    }
    public void enterCardHolderName(String cardHolderName){
        //Enter CardHolder Name passing data from scenario outline
        typeText(_cardHolderName,cardHolderName);

    }
    public void enterCardNumber(String cardNumber){
        //Enter Card Number passing data from scenario outline
        typeText(_cardNumber,cardNumber);

    }
    public void selectExpireMonth(String expireMonth){
        //Select Expire Month
        selectValueFromDropDown(_selectExpireMonth,expireMonth);

    }
    public void selectExpireYear(String expireYear){
        //Select Expire Year passing data from scenario outline
        selectValueFromDropDown(_selectExpireYear,expireYear);

    }
    public void enterCardCode( String cardCode){
        //Enter Card Code passing data from scenario outline
        typeText(_cardCode,cardCode);

    }

    public void clickOnContinueFromOpcPaymentInfoPage() {
        //Click on Continue From Opc-Payment_Info Page
        clickOnElement(_continueOpcPaymentInfo);

    }

    public void clickOnConfirmButton() {
        //Click on Confirm Order From Opc-Confirm_Order Page
        clickOnElement(_confirmOrder);

    }


}
