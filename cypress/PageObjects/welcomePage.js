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
    }
    signToNewsletterErrorMsg() {
        cy
            .get(this.msgSignToNewsletterError)
    }
    searchItem(item) {
        cy
            .get(this.inputSearch)
            .type(item)
    }
    checkSearchResults(item) {
        cy
            .get(this.searchResult)
            .contains(item)
    }
    openSearchItem() {
        cy
            .get(this.searchResult)
            .click()
    }
    checkSearchItem() {
        cy
            .get(this.itemName)
    }
}

export default WelcomePage;