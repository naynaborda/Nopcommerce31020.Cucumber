
Feature: registration functionality
  Background:
    Given  User is on the home page
    When User click on the register button

@RegressionTest
  Scenario: to verify user is able to register successfully and login again with registered email address
    And User enter all the Mandatory field on the registration page "Ram","Sita"
    And User click on register button on the registration page
    Then User should able to register successfully with message "Your registration completed"
    And User Click on logout button on the register result page
    And User Click on login button on the home page
    And User enter Registered email address and password
    And User click on login button
    Then User should able to log in successfully

@SmokeTest
     Scenario Outline: to confirm user is able to register successfully and login again with registered email address
      And User enter all the Mandatory fields on the registration page "<FirstName>","<LastName>","<email>","<Password>","<Confirm Password>"
      And User click on register button on the registration page
      Then User should able to register successfully with message "Your registration completed"
      And User Click on logout button on the register result page
      And User Click on login button on the home page
      And User enter Registered email address and password
      And User click on login button
      Then User should able to log in successfully

      Examples:
      |FirstName|LastName|email  |Password|Confirm Password|
      |Ram1     |Sita1   |test1  |sitaram |sitaram         |
      |Ram2     |Sita2   |test2  |sitaram |sitaram         |



