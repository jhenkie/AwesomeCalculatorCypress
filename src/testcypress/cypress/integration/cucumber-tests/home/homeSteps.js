import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from './homePage'

Given('I open web page', () => {
    HomePage.visit()
})

Then('I should see header title {string}', (title) => {
    HomePage.checkHeader(title)
})

And('I should see calculator input, button and ads', () => {
    HomePage.checkInput()
    HomePage.checkButton()
    HomePage.checkAds()
})

When('I fill in calculator {word}', (input) => {
    HomePage.fillInInput(input)
})

And('I click on calculator button', () => {
    HomePage.clickCalculate()
})

Then('I should see output not visible', () => {
    HomePage.checkOutputNotVisible()
})

Then('I should see visible output', () => {
    HomePage.checkOutputVisible()
})

Then('I should see output {int}', (result) => {
    HomePage.checkOutput(result)
})

When('I wait for 30 seconds', () => {
    HomePage.waitPage()
})

Then('I should see ads has been refreshed', () => {
    HomePage.checkNewAds()
})



