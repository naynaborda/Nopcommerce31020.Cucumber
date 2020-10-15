$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buyingBook.feature");
formatter.feature({
  "line": 1,
  "name": "Buying a Book Functionality",
  "description": "",
  "id": "buying-a-book-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10300463700,
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
  "name": "User click on books",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on Fahrenheit  by ray bradbury",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User change quantity of the product \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User add Fahrenheit  by bradbury book in wish list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should see message \"The product has been added to your wishlist\" from top green line",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User add product in to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on cart from top green message",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on term and condition",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on checkout as guest",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps1.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 129438400,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_books()"
});
formatter.result({
  "duration": 1604603200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Fahrenheit_by_ray_bradbury()"
});
formatter.result({
  "duration": 2000210800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 37
    }
  ],
  "location": "BuyingBookSteps1.userChangeQuantityOfTheProduct(String)"
});
formatter.result({
  "duration": 93535900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_add_Fahrenheit_by_bradbury_book_in_wish_list()"
});
formatter.result({
  "duration": 264251800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your wishlist",
      "offset": 25
    }
  ],
  "location": "BuyingBookSteps1.userShouldSeeMessageFromTopGreenLine(String)"
});
formatter.result({
  "duration": 706744900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_add_product_in_to_cart()"
});
formatter.result({
  "duration": 256034200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_cart_from_top_green_message()"
});
formatter.result({
  "duration": 1754649700,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_term_and_condition()"
});
formatter.result({
  "duration": 254413900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_checkout()"
});
formatter.result({
  "duration": 742585100,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_checkout_as_guest()"
});
formatter.result({
  "duration": 1793800700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "to verify user should  able to see order confirmation message after buying a book",
  "description": "",
  "id": "buying-a-book-functionality;to-verify-user-should--able-to-see-order-confirmation-message-after-buying-a-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User filled personal details for checkout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on continue button from one page check out page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on continue button from shipping page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on credit card",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Continue From Opc-Payment-Method Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enter card details",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Continue button From Opc-Payment_Info Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Confirm button From Opc-Confirm_Order Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should able to see order confirmation message \"Your order has been successfully processed!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BuyingBookSteps1.user_filled_personal_details_for_checkout()"
});
formatter.result({
  "duration": 733230600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_continue_button_from_one_page_check_out_page()"
});
formatter.result({
  "duration": 265030000,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_continue_button_from_shipping_page()"
});
formatter.result({
  "duration": 403097400,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_credit_card()"
});
formatter.result({
  "duration": 338863200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Continue_From_Opc_Payment_Method_Page()"
});
formatter.result({
  "duration": 249566600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_enter_card_details()"
});
formatter.result({
  "duration": 1026730600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Continue_button_From_Opc_Payment_Info_Page()"
});
formatter.result({
  "duration": 247950500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Confirm_button_From_Opc_Confirm_Order_Page()"
});
formatter.result({
  "duration": 329510400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 52
    }
  ],
  "location": "BuyingBookSteps1.userShouldAbleToSeeOrderConfirmationMessage(String)"
});
formatter.result({
  "duration": 1787453400,
  "status": "passed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "to confirm user should  able to see order confirmation message after buying a book",
  "description": "",
  "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User enter\"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cCountry\u003e\",\"\u003cCity\u003e\",\"\u003cAddress1\u003e\",\"\u003cPostCode\u003e\",\"\u003cPhoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on continue button from one page check out page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on continue button from shipping page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on credit card",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Continue From Opc-Payment-Method Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter card details\"\u003cCard type\u003e\",\"\u003cCardHolder Name\u003e\",\"\u003cCard Number\u003e\",\"\u003cExpiry Month\u003e\",\"\u003cExpiry Year\u003e\",\"\u003cCard Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on Continue button From Opc-Payment_Info Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Confirm button From Opc-Confirm_Order Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should able to see order confirmation message \"Your order has been successfully processed!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
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
      "line": 44,
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
      "line": 45,
      "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8128670700,
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
  "name": "User click on books",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on Fahrenheit  by ray bradbury",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User change quantity of the product \"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User add Fahrenheit  by bradbury book in wish list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should see message \"The product has been added to your wishlist\" from top green line",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User add product in to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on cart from top green message",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on term and condition",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on checkout as guest",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps1.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_books()"
});
formatter.result({
  "duration": 2225646700,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Fahrenheit_by_ray_bradbury()"
});
formatter.result({
  "duration": 1688134300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 37
    }
  ],
  "location": "BuyingBookSteps1.userChangeQuantityOfTheProduct(String)"
});
formatter.result({
  "duration": 84585300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_add_Fahrenheit_by_bradbury_book_in_wish_list()"
});
formatter.result({
  "duration": 265682100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your wishlist",
      "offset": 25
    }
  ],
  "location": "BuyingBookSteps1.userShouldSeeMessageFromTopGreenLine(String)"
});
formatter.result({
  "duration": 796852500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_add_product_in_to_cart()"
});
formatter.result({
  "duration": 255766100,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_cart_from_top_green_message()"
});
formatter.result({
  "duration": 938468600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_term_and_condition()"
});
formatter.result({
  "duration": 259586000,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_checkout()"
});
formatter.result({
  "duration": 880928500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_checkout_as_guest()"
});
formatter.result({
  "duration": 1317145200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "to confirm user should  able to see order confirmation message after buying a book",
  "description": "",
  "id": "buying-a-book-functionality;to-confirm-user-should--able-to-see-order-confirmation-message-after-buying-a-book;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 31,
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
  "line": 32,
  "name": "User click on continue button from one page check out page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on continue button from shipping page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User click on credit card",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Continue From Opc-Payment-Method Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "line": 37,
  "name": "User click on Continue button From Opc-Payment_Info Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Confirm button From Opc-Confirm_Order Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
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
  "location": "BuyingBookSteps1.userEnter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 679182500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_continue_button_from_one_page_check_out_page()"
});
formatter.result({
  "duration": 267849500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_continue_button_from_shipping_page()"
});
formatter.result({
  "duration": 435993400,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_credit_card()"
});
formatter.result({
  "duration": 936516300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Continue_From_Opc_Payment_Method_Page()"
});
formatter.result({
  "duration": 295327300,
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
  "location": "BuyingBookSteps1.userEnterCardDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1649106800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Continue_button_From_Opc_Payment_Info_Page()"
});
formatter.result({
  "duration": 245915900,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps1.user_click_on_Confirm_button_From_Opc_Confirm_Order_Page()"
});
formatter.result({
  "duration": 340353500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 52
    }
  ],
  "location": "BuyingBookSteps1.userShouldAbleToSeeOrderConfirmationMessage(String)"
});
formatter.result({
  "duration": 914589100,
  "status": "passed"
});
formatter.after({
  "duration": 13300,
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
  "duration": 8197052200,
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
  "name": "User click on Apparel",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on clothing  from left side menu",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps1.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_click_on_Apparel()"
});
formatter.result({
  "duration": 1812373900,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_click_on_clothing_from_left_side_menu()"
});
formatter.result({
  "duration": 1074410000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "to confirm user should able to see confirmation message  no product for comparison in compare list.",
  "description": "",
  "id": "t-shirt-comparison-functionality;to-confirm-user-should-able-to-see-confirmation-message--no-product-for-comparison-in-compare-list.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@RegressionTest"
    },
    {
      "line": 23,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User select sort by \"Price: High to Low\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User select  display \"9\" per page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User add custom t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User add over-sized women t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on product comparison from green line link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User verify over-sized women t-shirt name in compare list",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on clear compare list",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "location": "ClothingComparisionSteps1.userSelectSortBy(String)"
});
formatter.result({
  "duration": 1367213800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 22
    }
  ],
  "location": "ClothingComparisionSteps1.userSelectDisplayPerPage(String)"
});
formatter.result({
  "duration": 1826118300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_click_on_list()"
});
formatter.result({
  "duration": 1060520300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_add_custom_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 289554600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_add_over_sized_women_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 245545700,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_click_on_product_comparison_from_green_line_link()"
});
formatter.result({
  "duration": 1068558600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_verify_over_sized_women_t_shirt_name_in_compare_list()"
});
formatter.result({
  "duration": 129252200,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisionSteps1.user_click_on_clear_compare_list()"
});
formatter.result({
  "duration": 47496700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have no items to compare.",
      "offset": 45
    }
  ],
  "location": "ClothingComparisionSteps1.user_Should_able_to_see_confirmation_message(String)"
});
formatter.result({
  "duration": 1609691800,
  "status": "passed"
});
formatter.after({
  "duration": 12000,
  "status": "passed"
});
});