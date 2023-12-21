import Login from "../../PageObjects/loginPage"

describe('Login page functionalities', { tags: ['@login'] }, () => {

    const loginPage = new Login;

    it("Check if user can log in with valid credentials", function () {

        cy.fixture('loginData').then((data) => {

            cy
                .loginNavigation()
                .loginCredentials(data.loginData[0].email, data.loginData[0].password)
            loginPage.clickLogin()
            loginPage.verifyLogin()

        })
    })

    it("Check if user can log in with invalid password", function () {

        cy.fixture('loginData').then((data) => {

            cy
                .loginNavigation()
                .loginCredentials(data.loginData[1].email, data.loginData[1].password)
            loginPage.clickLogin()
            cy.wait(1000);
            loginPage.errorLogin()
            cy
                .should('have.text', 'Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect\n')

        })
    })
    it("Check if user can log in with invalid email", function () {

        cy.fixture('loginData').then((data) => {
            cy.request({
                method: 'POST',
                url: Cypress.config('baseUrl') + '/login',
                body: {
                    Email: data.loginData[2].email,
                    Password: data.loginData[2].password
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    })
    /*
    it("Check if user can log in with invalid email", function () {
        cy.fixture('loginData').then((data) => {
            cy.request({
                method: 'POST',
                url: Cypress.config('baseUrl') + '/login',
                failOnStatusCode: false,
                body: {
                    Email: data.loginData[2].email,
                    Password: data.loginData[2].password
                }
            }).as('login');
            // Wait for the response with the correct alias
            cy.wait('@login').then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
    */
});

