package testRunner;

import com.NopCommerce.HomePage;
import com.NopCommerce.LoginPage;
import com.NopCommerce.RegisterResultPage;
import com.NopCommerce.RegistrationPage;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class RegistrationSteps {
    HomePage homePage=new HomePage();
    RegistrationPage registrationPage=new RegistrationPage();
    RegisterResultPage registerResultPage=new RegisterResultPage();
    LoginPage loginPage=new LoginPage();
    @Given("^User is on the home page$")
    public void user_is_on_the_home_page(){

    }

    @When("^User click on the register button$")
    public void user_click_on_the_register_button()  {
        homePage.clickOnRegisterBtn();

    }
@And("^User enter all the Mandatory field on the registration page \"([^\"]*)\",\"([^\"]*)\"$")
public void userEnterAllTheMandatoryFieldOnTheRegistrationPage(String firstName, String lastName) {
        //here we passing data from featureFile(scenario)
    registrationPage.fillTheRegistrationForm(firstName,lastName);

}
    @When("^User enter all the Mandatory fields on the registration page \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void user_enter_all_the_Mandatory_fields_on_the_registration_page(String firstName, String lastName, String email, String password, String confirmPassword) {
        //here we passing data from featureFile(scenario outline)
        registrationPage.clickOnMale();
        registrationPage.enterFirstName(firstName);
        registrationPage.enterLastName(lastName);
        registrationPage.selectDateOfBirth();
        registrationPage.enterEmail(email);
        registrationPage.enterPassword(password);
        registrationPage.enterConfirmPassword(confirmPassword);

    }






    @When("^User click on register button on the registration page$")
    public void user_click_on_register_button_on_the_registration_page()  {
        registrationPage.clickOnRegisterButton1();


    }
    @Then("^User should able to register successfully with message \"([^\"]*)\"$")
    public void userShouldAbleToRegisterSuccessfullyWithMessage(String registrationSuccessfulMessage) {
        Assert.assertEquals(registrationSuccessfulMessage,registerResultPage.registrationConfirmationMessageText());

    }



    @Then("^User Click on logout button on the register result page$")
    public void user_Click_on_logout_button_on_the_register_result_page()  {
        registerResultPage.logOut();

    }

    @Then("^User Click on login button on the home page$")
    public void user_Click_on_login_button_on_the_home_page()  {
        homePage.clickOnLoginBtn();

    }

    @Then("^User enter Registered email address and password$")
    public void user_enter_Registered_email_address_and_password()  {
        loginPage.fillingLogInDetails();

    }

    @Then("^User click on login button$")
    public void user_click_on_login_button()  {
        loginPage.clickOnLoginButton();

    }

    @Then("^User should able to log in successfully$")
    public void user_should_able_to_log_in_successfully()  {
        Assert.assertEquals("My account", loginPage.logInConfirmationMessage());


    }



}
