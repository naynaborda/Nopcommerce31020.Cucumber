package com.NopCommerce;

import org.openqa.selenium.By;

public class CompareProductPage extends Utils {
    private By _customTShirt = By.xpath("//a[contains(text(),'Custom T-Shirt')]");
    private By _clearComparision = By.xpath("//a[@class='clear-list']");
    private By _noProductForCompare = By.xpath("//div[@class='no-data']");
    private By _oversizedWomenTShirt = By.linkText("Oversized Women T-Shirt");

    public String verifyCustomTShirt() {
        //asserting product name custom t-shirt
        return getText(_customTShirt);


    }

    public String verifyOverSizedWomenTShirt() {
        //asserting product name over sizes women t-shirt
        return getText(_oversizedWomenTShirt);
    }

    public void clearCompareList() {
        //clear compare list
        clickOnElement(_clearComparision);

    }

    public String noProductForComparision() {
        //asserting message you have no items to compare
        return getText(_noProductForCompare);
    }
}
