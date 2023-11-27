class ProductPage {
    addToWishlist() {
        cy
            .get('#add-to-wishlist-button-28')
            .click()
    }
    openWishlist() {
        cy
            .get('.ico-wishlist > .cart-label')
            .click()
    }
    getWishlistItem() {
        cy
            .get('.cart-item-row')
            .should('have.length', 1)
    }
    changeWishlist() {
        cy
            .get('.wishlist-qty')
            .should('have.text', '(1)')
    }
}

export default ProductPage;