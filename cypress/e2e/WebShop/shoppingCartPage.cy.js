import ShoppingCart from "../../PageObjects/shoppingCartPage.js";

describe('Shopping cart page functionalities', () => {

    const shoppingCartPage = new ShoppingCart;

    beforeEach(() => {
        cy
            .visit('')
    });

    it('Check if user can open Shopping cart without items in shopping cart', function () {

        cy
            .get('#topcartlink > .ico-cart').click()
        shoppingCartPage.orderSummaryMessage()

    })
    it('Check if user can open Shopping cart with items added to the shopping cart', function () {

        cy
            .shoppingCartNavigation()
            .get('h1').should('have.text', 'Shopping cart')

    })
    it('Check if user can delete items from shopping cart', function () {

        cy
            .shoppingCartNavigation()
            .get('.remove-from-cart > input').click()
        shoppingCartPage.updateCart()
        shoppingCartPage.orderSummaryMessage()

    })
    it('Check if user can edit quantity of items from shopping cart', function () {

        cy
            .shoppingCartNavigation()
            .get('.qty-input').clear()
            .type('2')
        shoppingCartPage.updateCart()
            .get('.qty-input').should('have.value', '2')

    })
    it('Check if user can succesfully navigate to checkout without clicking agree with terms of service', function () {

        cy
            .shoppingCartNavigation()
        shoppingCartPage.goToCheckout()
        shoppingCartPage.termsOfServiceMessage()

    })
    it('Check if user can succesfully navigate to checkout with clicking agree with terms of service', function () {

        cy
            .shoppingCartNavigation()
        shoppingCartPage.agreeWithTermsOfService()
        shoppingCartPage.goToCheckout()
        shoppingCartPage.checkoutMessage()

    })

    it('Check if user can make an order as a guest', function () {

        cy.fixture('billingData').then((data) => {

            cy
                .shoppingCartNavigation()
            shoppingCartPage.agreeWithTermsOfService()
            shoppingCartPage.goToCheckout()
            shoppingCartPage.checkoutAsGuest()
            shoppingCartPage.setBilingFirstName(data.billingData[0].firstName)
            shoppingCartPage.setBilingFirstName(data.billingData[0].lastName)
            shoppingCartPage.setBilingEmail(data.billingData[0].email)
            shoppingCartPage.setBillingCountryId(data.billingData[0].countryId)
            shoppingCartPage.setBillingCity(data.billingData[0].city)
            shoppingCartPage.setBillingAddress(data.billingData[0].address)
            shoppingCartPage.setBillingPostalCode(data.billingData[0].postalCode)
            shoppingCartPage.setBillingPhoneNumber(data.billingData[0].phoneNumber)
                .navigationCheckout()
            shoppingCartPage.orderMessage()

        })
    })
});


