class WishlistPage {

    qtyInput = '.qty-input'
    btnUpdateWishlist = '.update-wishlist-button'
    selMoveToCart = '.add-to-cart > input'
    btnMoveToCart = '.wishlist-add-to-cart-button'
    qtyCart = '.cart-qty'

    changeWishlistQuanity() {
        cy
            .get(this.qtyInput)
            .clear()
    }
    updateWishlist() {
        cy
            .get(this.btnUpdateWishlist)
            .click()
    }
    verifyWishlistUpdate() {
        cy
            .get(this.qtyInput)
    }
    moveToShoppingCart() {
        cy
            .get(this.selMoveToCart)
            .click()
            .get(this.btnMoveToCart)
            .click()
    }
    verifyShoppingCartUpdate() {
        cy
            .get(this.qtyCart)
    }
}
export default WishlistPage;