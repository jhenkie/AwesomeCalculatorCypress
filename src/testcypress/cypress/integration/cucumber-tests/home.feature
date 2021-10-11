@smoke
Feature: Check calculator page
    Background: Open browser
        Given I open web page

    Scenario: Verify visibility elements
        Then I should see header title 'Best, most awesome factorial calculator!'
        And I should see calculator input, button and ads

    Scenario: Verify empty input
        When I click on calculator button
        Then I should see output not visible

    Scenario Outline: Verify negative scenario for input
        When I fill in calculator <input>
        And I click on calculator button
        Then I should see output not visible

    Examples:
    |input|
    |-1|
    |1.2|
    |!@#|
    |text|

    Scenario Outline: Verify visible output
        When I fill in calculator <input>
        And I click on calculator button
        Then I should see visible output

    Examples:
    |input|
    |1|

    Scenario Outline: Verify positive scenario for input
        When I fill in calculator <input>
        And I click on calculator button
        Then I should see output <result>

    Examples:
    |input|result|
    |0|1|
    |1|1|
    |3|6|
    |10|3628800|

    Scenario Outline: Verify large number input
        When I fill in calculator <input>
        And I click on calculator button
        Then I should see output <result>

    Examples:
    |input|result|
    |1000|0|

    Scenario: Verify ads will change
        When I wait for 30 seconds
        Then I should see ads has been refreshed