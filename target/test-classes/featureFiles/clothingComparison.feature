Feature: T-shirt comparison Functionality

  Background:
    Given User is on the home page
    When User click on Apparel
    And User click on clothing  from left side menu

  @SmokeTest
  Scenario: to verify user should able to see confirmation message  no product for comparison in compare list with screenshot.

    And User select sort by "Price: Low to High"
    And User select  display "3" per page
    And User click on list
    And User take a screenshot
    And User add custom t-shirt to compare list
    And User add over-sized women t-shirt to compare list
    And User take again screenshot with green line on top with message, The product has been added to your product comparison
    And  User click on product comparison from green line link
    And User verify Custom T-Shirt name in compare list
    And User click on clear compare list
    Then User Should able to see confirmation message"You have no items to compare."

  @RegressionTest @SanityTest
  Scenario: to confirm user should able to see confirmation message  no product for comparison in compare list.
    And User select sort by "Price: High to Low"
    And  User select  display "9" per page
    And User click on list
    And User add custom t-shirt to compare list
    And User add over-sized women t-shirt to compare list
    And User click on product comparison from green line link
    And User verify over-sized women t-shirt name in compare list
    And User click on clear compare list
    Then User Should able to see confirmation message"You have no items to compare."