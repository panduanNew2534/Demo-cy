/// <reference types="cypress"/>

// import { faker } from '@faker-js/faker';
const env = Cypress.env('ENV');
import locator from '../../support/locators';
import { Utility } from '../../support/utiltity';
const mainURL = new Utility().getBaseUrl();


describe('Checking Element Page', () => {

    beforeEach('Goto main page',()=>{
        cy.visit(mainURL)
    })



    it('C111: Verify element clicking - Testing', () => {
        cy.fixture(`${env}/loginData`).then((data): any=>{
            cy.get(locator.loginPage.txtBoxEmail).type(data.correctData.email)
            cy.get(locator.loginPage.txtBoxPassword).type(data.correctData.password)
            cy.get(locator.loginPage.btnLogin).click()
            cy.fixture('expectMsg').then((expected)=>{
                cy.contains(expected.errorMsg.invalidEmailOrPassword)
            })
        })
    })

})