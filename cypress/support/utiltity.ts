//utility.ts
let env: string = Cypress.env('ENV');
export class Utility{
    getBaseUrl(){
        if (env == 'qa')
            return 'https://automationexercise.com/login';
        if (env == 'stg')
            return 'https://automationexercise.com/login';
        else
            return 'https://automationexercise.com/login';
    }

    getAPIURL(){
        if (env == 'qa')
            return 'https://dummy.restapiexample.com';
        if (env == 'stg')
            return 'https://dummy.restapiexample.com';
        else
            return 'https://dummy.restapiexample.com';
    }
    
}