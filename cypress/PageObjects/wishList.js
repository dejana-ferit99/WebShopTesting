class WishlistPage {
    changeWishlistQuanity() {
        cy
            .get('.qty-input')
            .clear()
            .type('2')
    }
    updateWishlist() {
        cy
            .get('.update-wishlist-button')
            .click()
    }
    verifyWishlistUpdate() {
        cy
            .get('.qty-input')
            .should('have.value', '2')
    }
    moveToShoppingCart() {
        cy
            .get('.add-to-cart > input')
            .click()
    }
}
export default WishlistPage;