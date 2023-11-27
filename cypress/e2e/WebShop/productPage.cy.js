import ProductPage from "../../PageObjects/productPage";

describe('Product page functinalities', () => {

    const productPage = new ProductPage;

    beforeEach(() => {
        cy
            .visit('/apparel-shoes')
    });

    it("Check if user can open Wishlist with items in wishlist", function () {
        cy
            .productPageNavigation()
        productPage.addToWishlist()
        productPage.openWishlist()
        productPage.getWishlistItem()
    })

    it("Check if user can email send item to the friend", function () {
        cy
            .productPageNavigation()
            .get('.email-a-friend > .button-2').click()
            .get('#FriendEmail')
            .type('abcd@gmail.com')
            .get('#YourEmailAddress')
            .type('dcba@gmail.com')
            .get('form > .buttons > .button-1').click()
            .get('.validation-summary-errors > ul > li').should('have.text', 'Only registered customers can use email a friend feature')
    })
    it("Check if user can add a review of the product", function () {
        cy
            .login()
            .get('.top-menu > :nth-child(4) > a').click()
            .productPageNavigation()
            .get('.product-review-links > :nth-child(3)').click()
            .get('#AddProductReview_Title')
            .type('Title')
            .get('#AddProductReview_ReviewText')
            .type('Text')
            .get('form > .buttons > .button-1').click()
            .get('div.result').should('have.text', 'Product review is successfully added.')
    })
    it("Check if user can add item to wishlist", function () {
        cy
            .productPageNavigation()
        productPage.addToWishlist()
        productPage.changeWishlist()

    })
});
