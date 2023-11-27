class ShoppingCart {

    btnTermsOfService = "#termsofservice"
    btnCheckout = "#checkout"
    btnCheckoutAsGuest = ".checkout-as-guest-button"
    msgCheckout = "h1"
    msgTermsOfService = "p"
    txtFirstName = "#BillingNewAddress_FirstName"
    txtLastName = "#BillingNewAddress_LastName"
    txtEmail = "#BillingNewAddress_Email"
    txtId = "#BillingNewAddress_CountryId"
    txtCity = ":nth-child(7) > label"
    txtAddress = ":nth-child(8) > label"
    txtPostalCode = "#BillingNewAddress_ZipPostalCode"
    txtNumber = "#BillingNewAddress_PhoneNumber"
    txtOrderMessage = "strong"
    btnUpdateCart = ".update-cart-button"
    txtSummaryMessage = ".order-summary-content"

    agreeWithTermsOfService() {
        cy
            .get(this.btnTermsOfService)
            .click()
    }
    termsOfServiceMessage() {
        cy
            .get(this.msgTermsOfService)
            .should('have.text', 'Please accept the terms of service before the next step.')
    }
    goToCheckout() {
        cy
            .get(this.btnCheckout)
            .click()
    }
    checkoutMessage() {
        cy
            .get(this.msgCheckout)
            .should('have.text', 'Welcome, Please Sign In!')
    }
    checkoutAsGuest() {
        cy
            .get(this.btnCheckoutAsGuest)
            .click()
    }
    setBilingFirstName(firstName) {
        cy
            .get(this.txtFirstName)
            .type(firstName)
    }
    setBilingLastName(lastName) {
        cy
            .get(this.txtLastName)
            .type(lastName)
    }
    setBilingEmail(email) {
        cy
            .get(this.txtEmail)
            .type(email)
    }
    setBillingCountryId(id) {
        cy
            .get(this.txtId)
            .select(id)
    }
    setBillingCity(city) {
        cy
            .get(this.txtCity)
            .type(city)
    }
    setBillingAddress(address) {
        cy
            .get(this.txtAddress)
            .type(address)
    }
    setBillingPostalCode(postalCode) {
        cy
            .get(this.txtPostalCode)
            .type(postalCode)
    }
    setBillingPhoneNumber(number) {
        cy
            .get(this.txtNumber)
            .type(number)
    }
    orderMessage() {
        cy
            .get(this.txtOrderMessage)
            .should('have.text', 'Your order has been successfully processed!')
    }
    updateCart() {
        cy
            .get(this.btnUpdateCart)
            .click()
    }
    orderSummaryMessage() {
        cy
            .get(this.txtSummaryMessage)
            .should('have.text', '\n    \n    \nYour Shopping Cart is empty!    \n')
    }
}

export default ShoppingCart;