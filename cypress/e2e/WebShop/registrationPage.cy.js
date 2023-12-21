import Registration from "../../PageObjects/registrationpage";

describe('Registration page functionalities', () => {

    let registrationEmail;
    let invalidEmail;
    let registrationPassword;
    let confirmPassword;
    let invalidConfirmPassword;

    const registrationPage = new Registration();

    beforeEach(() => {
        registrationEmail = Math.random().toString(36).substring(2) + "@gmail.com";
        invalidEmail = Math.random().toString(36).substring(2);
        registrationPassword = Math.random().toString(36).substring(2);
        confirmPassword = registrationPassword;
        invalidConfirmPassword = Math.random().toString(36).substring(2);
    });

    it("Check if user can register with valid data", function () {
        cy.fixture('registrationData').then((data) => {
            cy.registrationNavigation();
            registrationPage.setGender();
            registrationPage.setFirstName(data.registrationData[0].firstName);
            registrationPage.setLastName(data.registrationData[0].lastName);
            registrationPage.setEmail(registrationEmail);
            registrationPage.setPassword(registrationPassword);
            registrationPage.setConfirmPassword(confirmPassword);
            registrationPage.clickRegistration();
            registrationPage.verifyRegistration()
            cy
                .should('have.text', '\n Your registration completed\n        ')
        });
    });

    it("Check if user can register with invalid mail", function () {
        cy.fixture('registrationData').then((data) => {
            cy.registrationNavigation();
            registrationPage.setGender();
            registrationPage.setFirstName(data.registrationData[1].firstName);
            registrationPage.setLastName(data.registrationData[1].lastName);
            registrationPage.setEmail(invalidEmail);
            registrationPage.setPassword(registrationPassword);
            registrationPage.setConfirmPassword(confirmPassword);
            registrationPage.clickRegistration();
            registrationPage.errorEmailRegistration();
        });
    });

    it("Check if user can register with mismatch of password and confirm password", function () {
        cy.fixture('registrationData').then((data) => {
            cy.registrationNavigation();
            registrationPage.setGender();
            registrationPage.setFirstName(data.registrationData[2].firstName);
            registrationPage.setLastName(data.registrationData[2].lastName);
            registrationPage.setEmail(registrationEmail);
            registrationPage.setPassword(registrationPassword);
            registrationPage.setConfirmPassword(invalidConfirmPassword);
            registrationPage.clickRegistration();
            registrationPage.errorPasswordRegistration()
            cy
                .should('have.text', 'The password and confirmation password do not match.')
        });
    });
});


