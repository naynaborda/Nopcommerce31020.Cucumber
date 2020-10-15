Feature: Buying a Book Functionality

  Background:
    Given User is on the home page
    When User click on books
    And User click on Fahrenheit  by ray bradbury
    And User change quantity of the product "4"
    And User add Fahrenheit  by bradbury book in wish list
    Then User should see message "The product has been added to your wishlist" from top green line
    And User add product in to cart
    And User click on cart from top green message
    And User click on term and condition
    And User click on checkout
    And User click on checkout as guest

  @RegressionTest
  Scenario: to verify user should  able to see order confirmation message after buying a book
    And User filled personal details for checkout
    And User click on continue button from one page check out page
    And User click on continue button from shipping page
    And User click on credit card
    And User click on Continue From Opc-Payment-Method Page
    And User enter card details
    And User click on Continue button From Opc-Payment_Info Page
    And User click on Confirm button From Opc-Confirm_Order Page
    Then User should able to see order confirmation message "Your order has been successfully processed!"

  @RegressionTest

  Scenario Outline: to confirm user should  able to see order confirmation message after buying a book
    And User enter"<FirstName>","<LastName>","<Email>","<Country>","<City>","<Address1>","<PostCode>","<PhoneNumber>"
    And User click on continue button from one page check out page
    And User click on continue button from shipping page
    And User click on credit card
    And User click on Continue From Opc-Payment-Method Page
    And User enter card details"<Card type>","<CardHolder Name>","<Card Number>","<Expiry Month>","<Expiry Year>","<Card Code>"
    And User click on Continue button From Opc-Payment_Info Page
    And User click on Confirm button From Opc-Confirm_Order Page
    Then User should able to see order confirmation message "Your order has been successfully processed!"



    Examples:
      | FirstName | LastName | Email               | Country        | City   | Address1      | PostCode | PhoneNumber | Card type   | CardHolder Name | Card Number     | Expiry Month | Expiry Year | Card Code |
      | Raj1      | Kapoor1  | rajkappor1@test.com | United Kingdom | London | 606,ShivNagar | fg5 9lo  | 08965434875 | Master card | Mr Raj1         | 378282246310005 | 02           | 2021        | 324       |