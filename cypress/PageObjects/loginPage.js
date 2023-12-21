class Login {

    txtEmail = "#Email"
    txtPassword = "#Password"
    btnLogin = "form > .buttons > .button-1"
    msgErrorLogin = ".validation-summary-errors"
    msgErrorEmaillogin = ".validation-summary-errors"


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
    clickLogin() {
        cy
            .get(this.btnLogin)
            .click()

    }
    verifyLogin() {
        cy
            .request('https://academy.tricentis.com')
            .then((response) => {
                expect(response.status).to.eq(200)
            })

    }
    errorLogin() {
        cy
            .get(this.msgErrorLogin)
    }

}

export default Login;