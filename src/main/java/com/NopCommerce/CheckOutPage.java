package com.NopCommerce;

import org.openqa.selenium.By;

public class CheckOutPage extends Utils {
    private By _orderConfirmationMessage = By.xpath("//strong[contains(text(),'Your order has been successfully processed!')]");

    public String verifyOrderConfirmationText() {
        return getText(_orderConfirmationMessage);

    }
}
