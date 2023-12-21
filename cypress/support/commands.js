Cypress.Commands.add('loginNavigation', () => {
    cy
        .visit(Cypress.config('baseUrl'))
        .get('.ico-login').click()
})

Cypress.Commands.add('productPageNavigation', () => {
    cy
        .get(':nth-child(2) > .product-item > .details > .product-title > a').click()
})

Cypress.Commands.add('registrationNavigation', () => {
    cy
        .visit(Cypress.config('baseUrl'))
        .get('.ico-register').click()
})
Cypress.Commands.add('shoppingCartNavigation', () => {
    //adding item to cart and openining shopping cart
    cy
        .visit(Cypress.config('baseUrl'))
        .get('.top-menu > :nth-child(1) > a').click()
        .get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        .get('.ico-cart > .cart-label').click()
})
Cypress.Commands.add('login', (email, password) => {
    cy
        .visit(Cypress.config('baseUrl'))
        .get('.ico-login').click()
        .get('#Email')
        .type(email)
        .get('#Password')
        .type(password)
        .get('form > .buttons > .button-1').click()
        .request('https://academy.tricentis.com')
        .then((response) => {
            expect(response.status).to.eq(200)
        })
})
Cypress.Commands.add('loginCredentials', (email, password) => {
    cy
        .visit(Cypress.config('baseUrl'))
        .get('.ico-login').click()
        .get('#Email')
        .type(email)
        .get('#Password')
        .type(password)
})
Cypress.Commands.add('navigationCheckout', () => {
    cy
        .get('#billing-buttons-container > .button-1').click()
        .get('#shipping-buttons-container > .button-1').click()
        .get('#opc-payment_method > .step-title > h2').click()
        .get('#shipping-method-buttons-container > .button-1').click()
        .get('#payment-method-buttons-container > .button-1').click()
        .get('#payment-info-buttons-container > .button-1').click()
        .get('#confirm-order-buttons-container > .button-1').click()
})