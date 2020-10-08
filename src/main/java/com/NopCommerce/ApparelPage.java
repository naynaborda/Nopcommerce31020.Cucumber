package com.NopCommerce;

import org.openqa.selenium.By;

public class ApparelPage extends Utils {
    private By _clothingButton = By.linkText("Clothing");

    public void clickOnClothing() {
        //click on Clothing
        clickOnElement(_clothingButton);


    }
}
