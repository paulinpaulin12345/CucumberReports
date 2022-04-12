Feature: Hotel Booking In Adactin Application
@Ad1
Scenario Outline: Login Page
Given user Launch The Application
When user Enter The "<username>" In Username Field
And user Enter The "<password>" In Password Field
Then user Click On The Login Button And It Navigates To The Search Hotel

Examples:
|username|password|
|Gayathri7696|SD95CF|
|ammukutty25202125202|ammukutty252021|

@Ad2
Scenario: search Hotel Page
When user Enter The HotelLocation
And user Select The Hotel
And user Select The Room Type
And user Select The Number Of Rooms
And user Select Check In Date
And user Select Check Out Date
And user Select Adults Per Room
And user Select Children Per Room
Then user Click On Search Button And It Navigates To The Select Hotel

Scenario: Select Hotel Page
When user Click Option Button
Then user Click On Continue Button And It Navigates To The Book Hotel
@Ad2
Scenario: Select Book Hotel Page
When user Enter Firstname
And user Enter Lastname
And user Enter Billing Address
And user Enter Card Number
And user Enter Card Type
And user Select Month
And user Select Year
And user Select Cvv Number
Then user Click Booknow Button And It Navigates To The Booking Confirm
@Ad3
Scenario: Booking Confirm page
Then user Click Itenary Button And It Navigate To The Booked Itenary
@Ad3
Scenario: Booked Itenary Page
When user Click Check Box
Then user Click Logout Button And It Navigates To The LogOut
@Ad4
Scenario: Logout Page
When user Click Click Here To Login Again And It Navigates To Login Page