class WelcomePage {

    txtEmail = "#newsletter-email"
    btnSubscribe = "#newsletter-subscribe-button"
    msgSignToNewsletter = "#newsletter-result-block"
    msgSignToNewsletterError = "#newsletter-result-block"
    inputSearch = "#small-searchterms"
    searchResult = "#ui-id-2"
    itemName = "h1"

    setEmail(email) {
        cy
            .get(this.txtEmail)
            .type(email)

    }
    clickSubscribe() {
        cy
            .get(this.btnSubscribe)
            .click()
    }
    signToNewsletterMsg() {
        cy
            .get(this.msgSignToNewsletter)
            .should('have.text', 'Thank you for signing up! A verification email has been sent. We appreciate your interest.')
    }
    signToNewsletterErrorMsg() {
        cy
            .get(this.msgSignToNewsletterError)
            .should('have.text', 'Enter valid email')
    }
    searchItem() {
        cy
            .get(this.inputSearch)
            .type('computer')
    }
    checkSearchResults() {
        cy
            .get(this.searchResult)
            .contains('computer')
    }
    openSearchItem() {
        cy
            .get(this.searchResult)
            .click()
    }
    checkSearchItem() {
        cy
            .get(this.itemName)
            .should('have.text', '\n                                Build your own cheap computer\n                            ')
    }
}

export default WelcomePage;