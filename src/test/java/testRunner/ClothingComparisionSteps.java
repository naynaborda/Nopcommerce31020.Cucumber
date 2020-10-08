package testRunner;

import com.NopCommerce.ApparelPage;
import com.NopCommerce.ClothingPage;
import com.NopCommerce.CompareProductPage;
import com.NopCommerce.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class ClothingComparisionSteps {
    HomePage homePage = new HomePage();
    ApparelPage apparelPage = new ApparelPage();
    ClothingPage clothingPage = new ClothingPage();
    CompareProductPage compareProductPage = new CompareProductPage();

    @When("^User click on Apparel$")
    public void user_click_on_Apparel() {
        homePage.clickOnApparel();

    }

    @When("^User click on clothing  from left side menu$")
    public void user_click_on_clothing_from_left_side_menu() {
        apparelPage.clickOnClothing();


    }


    @And("^User select sort by \"([^\"]*)\"$")
    public void userSelectSortBy(String sortByPrice) {
        clothingPage.sortByLowToHighPrice(sortByPrice);
        clothingPage.sortByHighToLowPrice(sortByPrice);

    }

    @And("^User select  display \"([^\"]*)\" per page$")
    public void userSelectDisplayPerPage(String displayByNumber) {
        //passing data from feature file
        clothingPage.displayBy3Number(displayByNumber);
        clothingPage.displayBy9Number(displayByNumber);


    }


    @When("^User click on list$")
    public void user_click_on_list() {
        clothingPage.clickOnList();

    }

    @When("^User take a screenshot$")
    public void user_take_a_screenshot() {
        clothingPage.firstScreenShot();


    }

    @When("^User add custom t-shirt to compare list$")
    public void user_add_custom_t_shirt_to_compare_list() {
        clothingPage.addCustomTiShirtToComparison();

    }

    @When("^User add over-sized women t-shirt to compare list$")
    public void user_add_over_sized_women_t_shirt_to_compare_list() {
        clothingPage.addOverSizedWomenTShirtToComparison();

    }

    @When("^User take again screenshot with green line on top with message, The product has been added to your product comparison$")
    public void user_take_again_screenshot_with_green_line_on_top_with_message_The_product_has_been_added_to_your_product_comparison() {
        clothingPage.secondScreenshot();

    }

    @When("^User click on product comparison from green line link$")
    public void user_click_on_product_comparison_from_green_line_link() {
        clothingPage.productComparisonFromGreenLink();

    }

    @And("^User verify Custom T-Shirt name in compare list$")
    public void userVerifyCustomTShirtNameInCompareList() {
        Assert.assertEquals("Custom T-Shirt", compareProductPage.verifyCustomTShirt());


    }


    @When("^User click on clear compare list$")
    public void user_click_on_clear_compare_list() {
        compareProductPage.clearCompareList();


    }

    @Then("^User Should able to see confirmation message\"([^\"]*)\"$")
    public void user_Should_able_to_see_confirmation_message(String noItemsForComparisionConfirmationMessage) {
        //passing data from feature file
        Assert.assertEquals(noItemsForComparisionConfirmationMessage, compareProductPage.noProductForComparision());

    }


    @When("^User verify over-sized women t-shirt name in compare list$")
    public void user_verify_over_sized_women_t_shirt_name_in_compare_list() {
        Assert.assertEquals("Oversized Women T-Shirt", compareProductPage.verifyOverSizedWomenTShirt());


    }


}
