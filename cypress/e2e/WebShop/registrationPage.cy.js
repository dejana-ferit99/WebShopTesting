import Registration from "../../PageObjects/registrationpage";

describe('Registration page functionalities', () => {

    const registrationPage = new Registration;

    it("Check if user can register with valid data", function () {

        cy.fixture('registrationData').then((data) => {

            cy
                .registrationNavigation()
            registrationPage.setGender()
            registrationPage.setFirstName(data.registrationData[0].firstName)
            registrationPage.setLastName(data.registrationData[0].lastName)
            registrationPage.setEmail(data.registrationData[0].email)
            registrationPage.setPassword(data.registrationData[0].password)
            registrationPage.setConfirmPassword(data.registrationData[0].confirmPassword)
            registrationPage.clickRegistration()
            registrationPage.verifyRegistration()
        })
    })

    it.only("Check if user can register with invalid mail", function () {

        cy.fixture('registrationData').then((data) => {

            cy
                .registrationNavigation()
            registrationPage.setGender()
            registrationPage.setFirstName(data.registrationData[1].firstName)
            registrationPage.setLastName(data.registrationData[1].lastName)
            registrationPage.setEmail(data.registrationData[1].email)
            registrationPage.setPassword(data.registrationData[1].password)
            registrationPage.setConfirmPassword(data.registrationData[1].confirmPassword)
            registrationPage.clickRegistration()
            registrationPage.errorEmailRegistration()
        })
    })

    it("Check if user can register with mismatch of password and confirm password", function () {

        cy.fixture('registrationData').then((data) => {

            cy
                .registrationNavigation()
            registrationPage.setGender()
            registrationPage.setFirstName(data.registrationData[2].firstName)
            registrationPage.setLastName(data.registrationData[2].lastName)
            registrationPage.setEmail(data.registrationData[2].email)
            registrationPage.setPassword(data.registrationData[2].password)
            registrationPage.setConfirmPassword(data.registrationData[2].confirmPassword)
            registrationPage.clickRegistration()
            registrationPage.errorPasswordRegistration()
        })
    })

});

