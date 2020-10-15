package testRunner;

import com.NopCommerce.GiftCardsPage;
import com.NopCommerce.HomePage;
import com.NopCommerce.VirtualGiftCard;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

public class VirtualGiftCardSteps {
    HomePage homePage = new HomePage();
    VirtualGiftCard virtualGiftCard = new VirtualGiftCard();
    GiftCardsPage giftCardsPage = new GiftCardsPage();

    @When("^User click on Gift Cards$")
    public void user_click_on_Gift_Cards() {
        homePage.clickOnGiftCard();

    }

    @When("^User click on add to cart on virtual gift card$")
    public void user_click_on_add_to_cart_on_virtual_gift_card() {
        giftCardsPage.addingVirtualGiftCardInCart();


    }


    @When("^User click on Email a friend$")
    public void user_click_on_Email_a_friend() {
        virtualGiftCard.clickOnEmailFriend();


    }

    @And("^User enter \"([^\"]*)\",\"([^\"]*)\"$")
    public void userEnter(String recipientsName, String recipientsEmail) {
        //here we passing data from featureFile (scenario & scenario outline)
        virtualGiftCard.enterRecipientsNameAndEmail(recipientsName, recipientsEmail);

    }

}
