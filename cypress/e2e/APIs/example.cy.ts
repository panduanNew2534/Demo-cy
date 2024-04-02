/// <reference types="cypress"/>

// import { faker } from '@faker-js/faker';
const env = Cypress.env('ENV');
import { Utility } from '../../support/utiltity';
const apiURL = new Utility().getAPIURL();


describe('Checking Element Page', () => {

    it('C111: Verify element clicking - Testing', () => {
        cy.fixture('pathAPIs').then((data): any=>{
            cy.request({
                url: `${apiURL}${data.endpointPath.employeesGET}`,
                method: 'GET',
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body.status).to.eq('success')
            })
        })
    })

})