package testRunner;

import com.NopCommerce.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyingBookSteps1 {
    HomePage homePage=new HomePage();
    BooksPage booksPage=new BooksPage();
    Fahrenheit451BookPage fahrenheit451BookPage=new Fahrenheit451BookPage();
    CartPage cartPage=new CartPage();
    CheckoutAsGuestPage checkoutAsGuestPage=new CheckoutAsGuestPage();
    OnePageCheckOutPage onePageCheckOutPage=new OnePageCheckOutPage();
    CheckOutPage checkOutPage=new CheckOutPage();

    @When("^User click on books$")
    public void user_click_on_books()  {
        homePage.clickOnBook();

    }

    @When("^User click on Fahrenheit  by ray bradbury$")
    public void user_click_on_Fahrenheit_by_ray_bradbury() {
        booksPage.clickOnFahrenheit451();


    }

    @And("^User change quantity of the product \"([^\"]*)\"$")
    public void userChangeQuantityOfTheProduct(String quantity)  {
        fahrenheit451BookPage.changeQuantity(quantity);

    }

    @When("^User add Fahrenheit  by bradbury book in wish list$")
    public void user_add_Fahrenheit_by_bradbury_book_in_wish_list()  {
        fahrenheit451BookPage.addProductInWishList();

    }
    @Then("^User should see message \"([^\"]*)\" from top green line$")
    public void userShouldSeeMessageFromTopGreenLine(String bookAddedInWishListConfirmationMessage) {
        Assert.assertEquals(bookAddedInWishListConfirmationMessage,fahrenheit451BookPage.verifyBookAddedToWishlist());

    }



    @Then("^User add product in to cart$")
    public void user_add_product_in_to_cart() {
        fahrenheit451BookPage.addProductInToCart();

    }

    @Then("^User click on cart from top green message$")
    public void user_click_on_cart_from_top_green_message() {
        fahrenheit451BookPage.clickOnCartTopGreenMessage();


    }

    @Then("^User click on term and condition$")
    public void user_click_on_term_and_condition()  {
        cartPage.clickOnTermAndCondition();



    }

    @Then("^User click on checkout$")
    public void user_click_on_checkout()  {
        cartPage.clickOnCheckOut();

    }

    @Then("^User click on checkout as guest$")
    public void user_click_on_checkout_as_guest()  {
        checkoutAsGuestPage.clickOnCheckOutAsGuest();

    }

    @Then("^User filled personal details for checkout$")
    public void user_filled_personal_details_for_checkout()  {
        onePageCheckOutPage.fillingPersonalDetailsForCheckOut();

    }

    @Then("^User click on continue button from one page check out page$")
    public void user_click_on_continue_button_from_one_page_check_out_page()  {
        onePageCheckOutPage.clickOnContinueFromOnePageCheckoutPage();

    }

    @Then("^User click on continue button from shipping page$")
    public void user_click_on_continue_button_from_shipping_page() {
        onePageCheckOutPage.clickOnContinueFromShippingPage();

    }

    @Then("^User click on credit card$")
    public void user_click_on_credit_card()  {
        onePageCheckOutPage.clickOnCreditCard();

    }

    @Then("^User click on Continue From Opc-Payment-Method Page$")
    public void user_click_on_Continue_From_Opc_Payment_Method_Page()  {
        onePageCheckOutPage.clickOnContinueFromOpcPaymentMethodPage();

    }

    @Then("^User enter card details$")
    public void user_enter_card_details()  {
        onePageCheckOutPage.addCardDetails();


    }

    @Then("^User click on Continue button From Opc-Payment_Info Page$")
    public void user_click_on_Continue_button_From_Opc_Payment_Info_Page() {
        onePageCheckOutPage.clickOnContinueFromOpcPaymentInfoPage();

    }

    @Then("^User click on Confirm button From Opc-Confirm_Order Page$")
    public void user_click_on_Confirm_button_From_Opc_Confirm_Order_Page()
    {
        onePageCheckOutPage.clickOnConfirmButton();
    }

    @Then("^User should able to see order confirmation message \"([^\"]*)\"$")
    public void userShouldAbleToSeeOrderConfirmationMessage(String orderConfirmationMessage)  {
        //passing a data from feature file(scenario)
        Assert.assertEquals(orderConfirmationMessage,checkOutPage.verifyOrderConfirmationText());

    }

    @And("^User enter\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void userEnter(String firstName, String lastName, String email, String country, String city, String address1, String postcode, String phoneNumber)  {
        //passing a data from feature file(scenario outline)
        onePageCheckOutPage.enterFirstName(firstName);
        onePageCheckOutPage.enterLastName(lastName);
        onePageCheckOutPage.enterEmail(email);
        onePageCheckOutPage.selectCountry(country);
        onePageCheckOutPage.enterCity(city);
        onePageCheckOutPage.enterAddress1(address1);
        onePageCheckOutPage.enterPostCode(postcode);
        onePageCheckOutPage.enterPhoneNumber(phoneNumber);


    }

    @And("^User enter card details\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void userEnterCardDetails(String cardType, String cardHolderName, String cardNumber, String expireMonth, String expireYear, String cardCode)  {
        //passing a data from feature file(scenario outline)
        onePageCheckOutPage.selectCardType(cardType);
        onePageCheckOutPage.enterCardHolderName(cardHolderName);
        onePageCheckOutPage.enterCardNumber(cardNumber);
        onePageCheckOutPage.selectExpireMonth(expireMonth);
        onePageCheckOutPage.selectExpireYear(expireYear);
        onePageCheckOutPage.enterCardCode(cardCode);


    }





}
