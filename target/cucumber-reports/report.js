$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buyingBook.feature");
formatter.feature({
  "line": 1,
  "name": "Buying a Book Functionality",
  "description": "",
  "id": "buying-a-book-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "to confirm user should  able to see order confirmation message after buying a book",
  "description": "",
  "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enter\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cCountry\u003e\",\"\u003cCity\u003e\",\"\u003cAddress1\u003e\",\"\u003cPostCode\u003e\",\"\u003cPhoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on continue button from one page check out page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on continue button from shipping page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on credit card",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Continue From Opc-Payment-Method Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enter card details\"\u003cCard type\u003e\",\"\u003cCardHolder Name\u003e\",\"\u003cCard Number\u003e\",\"\u003cExpiry Month\u003e\",\"\u003cExpiry Year\u003e\",\"\u003cCard Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Continue button From Opc-Payment_Info Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Confirm button From Opc-Confirm_Order Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should able to see order confirmation message \"Your order has been successfully processed!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Country",
        "City",
        "Address1",
        "PostCode",
        "PhoneNumber",
        "Card type",
        "CardHolder Name",
        "Card Number",
        "Expiry Month",
        "Expiry Year",
        "Card Code"
      ],
      "line": 41,
      "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book;;1"
    },
    {
      "cells": [
        "Raj1",
        "Kapoor1",
        "rajkappor1@test.com",
        "United Kingdom",
        "London",
        "606,ShivNagar",
        "fg5 9lo",
        "08965434875",
        "Master card",
        "Mr Raj1",
        "378282246310005",
        "02",
        "2021",
        "324"
      ],
      "line": 42,
      "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11106554500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User click on books",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User click on Fahrenheit  by ray bradbury",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User change quantity of the product \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User add Fahrenheit  by bradbury book in wish list",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should see message \"The product has been added to your wishlist\" from top green line",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User add product in to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on cart from top green message",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on term and condition",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on checkout as guest",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 289916900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_books()"
});
formatter.result({
  "duration": 1591275100,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Fahrenheit_by_ray_bradbury()"
});
formatter.result({
  "duration": 4903481700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 37
    }
  ],
  "location": "BuyingBookSteps.userChangeQuantityOfTheProduct(String)"
});
formatter.result({
  "duration": 160661900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_add_Fahrenheit_by_bradbury_book_in_wish_list()"
});
formatter.result({
  "duration": 280891600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your wishlist",
      "offset": 25
    }
  ],
  "location": "BuyingBookSteps.userShouldSeeMessageFromTopGreenLine(String)"
});
formatter.result({
  "duration": 713051800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_add_product_in_to_cart()"
});
formatter.result({
  "duration": 278589200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_cart_from_top_green_message()"
});
formatter.result({
  "duration": 1668835900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_term_and_condition()"
});
formatter.result({
  "duration": 260878600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_checkout()"
});
formatter.result({
  "duration": 1452367900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_checkout_as_guest()"
});
formatter.result({
  "duration": 1848305300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "to confirm user should  able to see order confirmation message after buying a book",
  "description": "",
  "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User enter\"Raj1\",\"Kapoor1\",\"rajkappor1@test.com\",\"United Kingdom\",\"London\",\"606,ShivNagar\",\"fg5 9lo\",\"08965434875\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on continue button from one page check out page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on continue button from shipping page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on credit card",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Continue From Opc-Payment-Method Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enter card details\"Master card\",\"Mr Raj1\",\"378282246310005\",\"02\",\"2021\",\"324\"",
  "matchedColumns": [
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on Continue button From Opc-Payment_Info Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Confirm button From Opc-Confirm_Order Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should able to see order confirmation message \"Your order has been successfully processed!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Raj1",
      "offset": 11
    },
    {
      "val": "Kapoor1",
      "offset": 18
    },
    {
      "val": "rajkappor1@test.com",
      "offset": 28
    },
    {
      "val": "United Kingdom",
      "offset": 50
    },
    {
      "val": "London",
      "offset": 67
    },
    {
      "val": "606,ShivNagar",
      "offset": 76
    },
    {
      "val": "fg5 9lo",
      "offset": 92
    },
    {
      "val": "08965434875",
      "offset": 102
    }
  ],
  "location": "BuyingBookSteps.userEnter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 930552500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_continue_button_from_one_page_check_out_page()"
});
formatter.result({
  "duration": 259882800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_continue_button_from_shipping_page()"
});
formatter.result({
  "duration": 388843200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_credit_card()"
});
formatter.result({
  "duration": 351454900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Continue_From_Opc_Payment_Method_Page()"
});
formatter.result({
  "duration": 251984500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master card",
      "offset": 24
    },
    {
      "val": "Mr Raj1",
      "offset": 38
    },
    {
      "val": "378282246310005",
      "offset": 48
    },
    {
      "val": "02",
      "offset": 66
    },
    {
      "val": "2021",
      "offset": 71
    },
    {
      "val": "324",
      "offset": 78
    }
  ],
  "location": "BuyingBookSteps.userEnterCardDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1231577900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Continue_button_From_Opc_Payment_Info_Page()"
});
formatter.result({
  "duration": 278011300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Confirm_button_From_Opc_Confirm_Order_Page()"
});
formatter.result({
  "duration": 347346800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 52
    }
  ],
  "location": "BuyingBookSteps.userShouldAbleToSeeOrderConfirmationMessage(String)"
});
formatter.result({
  "duration": 1459138800,
  "status": "passed"
});
formatter.after({
  "duration": 28700,
  "status": "passed"
});
formatter.uri("clothingComparison.feature");
formatter.feature({
  "line": 1,
  "name": "T-shirt comparison Functionality",
  "description": "",
  "id": "t-shirt-comparison-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8213801200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User click on Apparel",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User click on clothing  from left side menu",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 89900,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_click_on_Apparel()"
});
formatter.result({
  "duration": 1581395300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_click_on_clothing_from_left_side_menu()"
});
formatter.result({
  "duration": 894462000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "to confirm user should able to see confirmation message  no product for comparison in compare list.",
  "description": "",
  "id": "t-shirt-comparison-functionality;to-confirm-user-should-able-to-see-confirmation-message--no-product-for-comparison-in-compare-list.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@RegressionTest"
    },
    {
      "line": 20,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User select sort by \"Price: High to Low\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select  display \"9\" per page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on list",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User add custom t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User add over-sized women t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on product comparison from green line link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User verify over-sized women t-shirt name in compare list",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on clear compare list",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Should able to see confirmation message\"You have no items to compare.\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Price: High to Low",
      "offset": 21
    }
  ],
  "location": "ClothingComparisionSteps.userSelectSortBy(String)"
});
formatter.result({
  "duration": 1453266800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 22
    }
  ],
  "location": "ClothingComparisionSteps.userSelectDisplayPerPage(String)"
});
formatter.result({
  "duration": 1500790600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_click_on_list()"
});
formatter.result({
  "duration": 1071661500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_add_custom_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 277646100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_add_over_sized_women_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 250273300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_click_on_product_comparison_from_green_line_link()"
});
formatter.result({
  "duration": 1069895300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_verify_over_sized_women_t_shirt_name_in_compare_list()"
});
formatter.result({
  "duration": 206195600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps.user_click_on_clear_compare_list()"
});
formatter.result({
  "duration": 64568800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have no items to compare.",
      "offset": 45
    }
  ],
  "location": "ClothingComparisionSteps.user_Should_able_to_see_confirmation_message(String)"
});
formatter.result({
  "duration": 1198558600,
  "status": "passed"
});
formatter.after({
  "duration": 26900,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 2,
  "name": "registration functionality",
  "description": "",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8998661800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 207900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1422063100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "to verify user is able to register successfully and login again with registered email address",
  "description": "",
  "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enter all the Mandatory field on the registration page \"Ram\",\"Sita\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should able to register successfully with message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter Registered email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 61
    },
    {
      "val": "Sita",
      "offset": 67
    }
  ],
  "location": "RegistrationSteps.userEnterAllTheMandatoryFieldOnTheRegistrationPage(String,String)"
});
formatter.result({
  "duration": 1542408300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 2139260200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 56
    }
  ],
  "location": "RegistrationSteps.userShouldAbleToRegisterSuccessfullyWithMessage(String)"
});
formatter.result({
  "duration": 63329000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 2217030100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 584985100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_Registered_email_address_and_password()"
});
formatter.result({
  "duration": 181542900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 919631600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 62084100,
  "status": "passed"
});
formatter.after({
  "duration": 20700,
  "status": "passed"
});
formatter.uri("virtualGiftCard.feature");
formatter.feature({
  "line": 2,
  "name": "adding a virtual gift card in the cart and send an email a friend functionality",
  "description": "",
  "id": "adding-a-virtual-gift-card-in-the-cart-and-send-an-email-a-friend-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9247823400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 159100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1743076200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "To Verify User should able to add virtual gift card in the cart send an email a friend and see confirmation message",
  "description": "",
  "id": "adding-a-virtual-gift-card-in-the-cart-and-send-an-email-a-friend-functionality;to-verify-user-should-able-to-add-virtual-gift-card-in-the-cart-send-an-email-a-friend-and-see-confirmation-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enter all the Mandatory field on the registration page \"Ram\",\"Sita\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter Registered email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on Gift Cards",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on add to cart on virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter \"Sonal\",\"sonal@test.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Email a friend",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 61
    },
    {
      "val": "Sita",
      "offset": 67
    }
  ],
  "location": "RegistrationSteps.userEnterAllTheMandatoryFieldOnTheRegistrationPage(String,String)"
});
formatter.result({
  "duration": 1616890000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 1113560000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 978769800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 580857400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_Registered_email_address_and_password()"
});
formatter.result({
  "duration": 192238200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 1034102900,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_Gift_Cards()"
});
formatter.result({
  "duration": 939899600,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_add_to_cart_on_virtual_gift_card()"
});
formatter.result({
  "duration": 300226800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sonal",
      "offset": 12
    },
    {
      "val": "sonal@test.com",
      "offset": 20
    }
  ],
  "location": "VirtualGiftCardSteps.userEnter(String,String)"
});
formatter.result({
  "duration": 577081500,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_Email_a_friend()"
});
formatter.result({
  "duration": 337434300,
  "status": "passed"
});
formatter.after({
  "duration": 15600,
  "status": "passed"
});
});