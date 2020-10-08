package com.NopCommerce;

import org.openqa.selenium.By;

public class ClothingPage extends Utils {
    private By _sortBy = By.id("products-orderby");
    private By _display = By.id("products-pagesize");
    private By _list = By.linkText("List");
    private By _addCustomTiShirt = By.xpath("//div[@class='page-body']//div[2]//div[1]//div[2]//div[3]//div[2]//input[2]");
    private By _addSecondTiShirt = By.xpath("//div[@class='product-list']//div[3]//div[1]//div[2]//div[3]//div[2]//input[2]");
    private By _productComparisonLink = By.linkText("product comparison");


    public void sortByLowToHighPrice(String price) {
        //sort by low to high price here we passing data from featureFile
        selectValueFromDropDown(_sortBy, price);
    }

    public void displayBy3Number(String display3) {
        //display 3 per page here we passing data from featureFile
        selectValueFromDropDown(_display, display3);

    }

    public void clickOnList() {
        //click on list
        clickOnElement(_list);

    }

    public void firstScreenShot() {
        //take a screenshot of clothing page
        captureScreenshots("Clothing Page");
    }

    public void addCustomTiShirtToComparison() {
        //add Custom T-Shirt to compare list
        clickOnElement(_addCustomTiShirt);

    }

    public void addOverSizedWomenTShirtToComparison() {
        //add Over-sized Women T-Shirt to compare list
        clickOnElement(_addSecondTiShirt);

    }

    public void secondScreenshot() {
        //take again screenshot with green line on top with message"The product has been added to your product comparison
        captureScreenshots("Product Comparison");


    }

    public void productComparisonFromGreenLink() {
        //click on product comparison from green line link
        clickOnElement(_productComparisonLink);

    }

    public void sortByHighToLowPrice(String price) {
        //click on sort by high to low price here we passing data from featureFile
        selectValueFromDropDown(_sortBy, price);
    }

    public void displayBy9Number(String display9) {
        //display 9 per page here we passing data from featureFile
        selectValueFromDropDown(_display, display9);
    }


}
