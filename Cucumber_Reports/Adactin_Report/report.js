$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Adactin/Features/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "Gayathri7696",
        "SD95CF"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "ammukutty25202125202",
        "ammukutty252021"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Gayathri7696\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"SD95CF\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 3164206100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gayathri7696",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 637615900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SD95CF",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 210716900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 1208959100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"ammukutty25202125202\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"ammukutty252021\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 579552400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ammukutty25202125202",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 405834200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ammukutty252021",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 316769300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 1981861900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user Enter The HotelLocation",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Click On Search Button And It Navigates To The Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_The_HotelLocation()"
});
formatter.result({
  "duration": 515479200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 288088400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 224568300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 196715100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Check_In_Date()"
});
formatter.result({
  "duration": 202500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Check_Out_Date()"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Adults_Per_Room()"
});
formatter.result({
  "duration": 285431600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Children_Per_Room()"
});
formatter.result({
  "duration": 194864800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Search_Button_And_It_Navigates_To_The_Select_Hotel()"
});
formatter.result({
  "duration": 1421543800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "user Click Option Button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Click On Continue Button And It Navigates To The Book Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_Option_Button()"
});
formatter.result({
  "duration": 219355300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_Continue_Button_And_It_Navigates_To_The_Book_Hotel()"
});
formatter.result({
  "duration": 966612200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Select Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user Enter Firstname",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Enter Lastname",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Select Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Select Cvv Number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Click Booknow Button And It Navigates To The Booking Confirm",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_Firstname()"
});
formatter.result({
  "duration": 351693500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Lastname()"
});
formatter.result({
  "duration": 360341100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Billing_Address()"
});
formatter.result({
  "duration": 747018600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Card_Number()"
});
formatter.result({
  "duration": 353497400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_Card_Type()"
});
formatter.result({
  "duration": 273612500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Month()"
});
formatter.result({
  "duration": 253754100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Year()"
});
formatter.result({
  "duration": 207286400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_Cvv_Number()"
});
formatter.result({
  "duration": 250190700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_Booknow_Button_And_It_Navigates_To_The_Booking_Confirm()"
});
formatter.result({
  "duration": 142411800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Booking Confirm page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-confirm-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user Click Itenary Button And It Navigate To The Booked Itenary",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_Itenary_Button_And_It_Navigate_To_The_Booked_Itenary()"
});
formatter.result({
  "duration": 1864590300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Booked Itenary Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booked-itenary-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user Click Check Box",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user Click Logout Button And It Navigates To The LogOut",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_Check_Box()"
});
formatter.result({
  "duration": 164351400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_Logout_Button_And_It_Navigates_To_The_LogOut()"
});
formatter.result({
  "duration": 696801900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Logout Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;logout-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@Ad4"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user Click Click Here To Login Again And It Navigates To Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Def.user_Click_Click_Here_To_Login_Again_And_It_Navigates_To_Login_Page()"
});
formatter.result({
  "duration": 971957400,
  "status": "passed"
});
});