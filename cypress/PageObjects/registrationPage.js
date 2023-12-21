class Registration {

    radioBtnGender = "#gender-female"
    txtFirstName = "#FirstName"
    txtLastName = "#LastName"
    txtEmail = "#Email"
    txtPassword = "#Password"
    txtConfirmPassword = "#ConfirmPassword"
    btnRegistration = "#register-button"
    msgRegistration = ".result"
    msgErrorRegistration = ".field-validation-error > span"

    setGender() {
        cy
            .get(this.radioBtnGender)
            .click()
    }

    setFirstName(firstName) {
        cy
            .get(this.txtFirstName)
            .type(firstName)
    }

    setLastName(lastName) {
        cy
            .get(this.txtLastName)
            .type(lastName)
    }

    setEmail(email) {
        cy
            .get(this.txtEmail)
            .type(email)
    }

    setPassword(password) {
        cy
            .get(this.txtPassword)
            .type(password)
    }

    setConfirmPassword(confirmPassword) {
        cy
            .get(this.txtConfirmPassword)
            .type(confirmPassword)
    }

    clickRegistration() {
        cy
            .get(this.btnRegistration)
            .click()
    }
    verifyRegistration() {
        cy
            .get(this.msgRegistration)
    }
    errorEmailRegistration() {
        cy
            .get(this.msgErrorRegistration)
            .should('have.text', 'Wrong email')
    }
    errorPasswordRegistration() {
        cy
            .get(this.msgErrorRegistration)
    }

}

export default Registration;