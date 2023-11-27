// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginNavigation', () => {
    cy
        .visit('')
        .get('.ico-login').click()
})

Cypress.Commands.add('productPageNavigation', () => {
    cy
        .get(':nth-child(2) > .product-item > .details > .product-title > a').click()
})

Cypress.Commands.add('registrationNavigation', () => {
    cy
        .visit('')
        .get('.ico-register').click()
})
Cypress.Commands.add('shoppingCartNavigation', () => {
    //adding item to cart and openining shopping cart
    cy
        .visit('')
        .get('.top-menu > :nth-child(1) > a').click()
        .get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        .get('.ico-cart > .cart-label').click()
})
Cypress.Commands.add('login', () => {
    cy
        .visit('')
        .get('.ico-login').click()
        .get('#Email')
        .type('anaanic1@gmail.com')
        .get('#Password')
        .type('1234567890Ana')
        .get('form > .buttons > .button-1').click()
        .request('https://academy.tricentis.com')
        .then((response) => {
            expect(response.status).to.eq(200)
        })
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