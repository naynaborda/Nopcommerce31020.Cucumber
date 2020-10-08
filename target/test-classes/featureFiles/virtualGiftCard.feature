
Feature: adding a virtual gift card in the cart and send an email a friend functionality
  Background:
    Given  User is on the home page
    When User click on the register button

    @SanityTest

  Scenario: To Verify User should able to add virtual gift card in the cart send an email a friend and see confirmation message
    And User enter all the Mandatory field on the registration page "Ram","Sita"
    And User click on register button on the registration page
    And User Click on logout button on the register result page
    And User Click on login button on the home page
    And User enter Registered email address and password
    And User click on login button
    And User click on Gift Cards
    And User click on add to cart on virtual gift card
    And User enter "Sonal","sonal@test.com"
    And User click on Email a friend
#   And User enter Friend's detail to send an email
#   And User click on send email button
#   Then User should able to send an email a friend
#   And User should able to see confirmation message Your message has been sent.

@SmokeTest
  Scenario Outline: To confirm User should able to add virtual gift card in the cart and send an email a friend and see confirmation message
    And User enter all the Mandatory fields on the registration page "<FirstName>","<LastName>","<email>","<Password>","<Confirm Password>"
    And User click on register button on the registration page
    And User Click on logout button on the register result page
    And User Click on login button on the home page
    And User enter Registered email address and password
    And User click on login button
    And User click on Gift Cards
    And User click on add to cart on virtual gift card
    And User enter "<Recipient's Name>","<Recipient's Email>"
    And User click on Email a friend
#   And User enter<Friend's email><User email address><Personal message>
#   And User click on send email button
#   Then User should able to send an email a friend
#   And User should able to see confirmation message Your message has been sent.

    Examples:
      |FirstName |LastName  |email  |Password|Confirm Password|Recipient's Name|Recipient's Email|Friend's email|User email address|Personal message|
      |Ram3      |Sita3     |test3  |sitaram |sitaram         |Sonal1          |sonal1@test.com  |sonal1@test.com|ramsita@test.com  |Birthday Gift   |
