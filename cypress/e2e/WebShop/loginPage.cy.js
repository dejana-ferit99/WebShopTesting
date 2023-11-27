import Login from "../../PageObjects/loginPage"

describe('Login page functionalities', () => {

    const loginPage = new Login;

    it("Check if user can log in with valid credentials", { tags: ['@login'] }, function () {

        cy.fixture('loginData').then((data) => {

            cy
                .loginNavigation()
            loginPage.setEmail(data.loginData[0].email)
            loginPage.setPassword(data.loginData[0].password)
            loginPage.clickLogin()
            loginPage.verifyLogin()

        })
    })

    it("Check if user can log in with invalid password", function () {

        cy.fixture('loginData').then((data) => {

            cy
                .loginNavigation()
            loginPage.setEmail(data.loginData[1].email)
            loginPage.setPassword(data.loginData[1].password)
            loginPage.clickLogin()
            loginPage.errorLogin()

        })
    })
    it("Check if user can log in with invalid email", function () {

        cy.fixture('loginData').then((data) => {

            cy
                .loginNavigation()
            loginPage.setEmail(data.loginData[2].email)
            loginPage.setPassword(data.loginData[2].password)
            loginPage.clickLogin()
            loginPage.errorEmailLogin()

        })
    })
});

