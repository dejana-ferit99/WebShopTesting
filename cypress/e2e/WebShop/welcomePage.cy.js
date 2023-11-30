import WelcomePage from "../../PageObjects/welcomePage"

describe("Welcome page functionalities", function () {

    const welcomePage = new WelcomePage;

    beforeEach(() => {
        cy
            .visit('')
    });

    it("Check if user can open Tricentis page", function () {

        cy
            .get('[href="https://academy.tricentis.com"]').click()
            .request('https://academy.tricentis.com')
            .then((response) => {
                expect(response.status).to.eq(200)
            })

    })
    it("Check if user can see a submenu of Computers from header menu", { tags: ['@smoke'] }, function () {

        cy
            .get('.top-menu > :nth-child(2) > [href="/computers"]').trigger('mouseover')
            .get('.top-menu > :nth-child(2) > ul > li').should('have.length', 3)

    })
    it("Check if user can open Wishlist without items in wishlist", { tags: ['@smoke'] }, function () {

        cy
            .get('.ico-wishlist > .cart-label').click()
            .get('.wishlist-content').should('have.text', '\nThe wishlist is empty!        ')

    })
    it("Check if user can open items from left side menu Categories", function () {

        cy
            .get('.list > :nth-child(6) > a').click()
            .get('h1').should('have.text', 'Jewelry')

    })
    it("Check if user can open items from left side menu Manufacturers", function () {

        cy
            .get('.block-manufacturer-navigation > .listbox > .list > .inactive > a').click()
            .get('h1').should('have.text', 'Tricentis')

    })
    it("Check if user can sign up for out newsletter", function () {

        cy.fixture('newsletterData').then((data) => {

            welcomePage.setEmail(data.newsletterData[0].email)
            welcomePage.clickSubscribe()
            welcomePage.signToNewsletterMsg()

        })

    })
    it("Check if user can subscribe to newsletter with invalid mail", function () {

        cy.fixture('newsletterData').then((data) => {

            welcomePage.setEmail(data.newsletterData[1].email)
            welcomePage.clickSubscribe()
            welcomePage.signToNewsletterErrorMsg()

        })

    })
    it("Check if user can open Popular tags from left side menu", function () {

        cy
            .get('.view-all > a').click()
            .get('h1').should('have.text', 'All product tags')

    })
    it("Check if user can open apperal from Popular tags from left side menu", function () {

        cy
            .get('.tags > ul > :nth-child(1) > a').click()
            .get('h1').should('have.text', 'Products tagged with \'apparel\'')

    })
    it("Check if user can vote in Community poll", function () {

        cy
            .get('#pollanswers-2').click()

    })
    it("Check if user can search an item", { tags: ['@smoke'] }, function () {

        welcomePage.searchItem()
        welcomePage.checkSearchResults()

    })
    it("Check if user can open search item", function () {

        welcomePage.searchItem()
        welcomePage.openSearchItem()
        welcomePage.checkSearchItem()

    })

})