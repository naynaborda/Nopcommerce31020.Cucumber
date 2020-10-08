package com.NopCommerce;

import org.openqa.selenium.By;

public class Fahrenheit451BookPage extends Utils {
    private By _changeQuantity = By.xpath("//input[@id='product_enteredQuantity_37']");
    private By _addBookInWishList = By.id("add-to-wishlist-button-37");
    private By _verifyWishList = By.className("content");
    private By _addBookInToCart = By.id("add-to-cart-button-37");
    private By _goToCartFromGreenMessage = By.xpath("//a[contains(text(),'shopping cart')]");

    public void changeQuantity(String changeQuantity) {
        //clear the Quantity
        clearField(_changeQuantity);
        //enter the quantity 4
        typeText(_changeQuantity,changeQuantity);
    }

    public void addProductInWishList() {
        //add the book in wishlist
        clickOnElement(_addBookInWishList);

    }

    public String verifyBookAddedToWishlist()
    {
        return getText(_verifyWishList);
    }

    public void addProductInToCart() {
        //add product in to cart
        clickOnElement(_addBookInToCart);

    }

    public void clickOnCartTopGreenMessage() {
        //go to cart from top green message
        clickOnElement(_goToCartFromGreenMessage);

    }

}
