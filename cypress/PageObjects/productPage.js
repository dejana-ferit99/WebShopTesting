class ProductPage {

    btnAddToCart = '#add-to-wishlist-button-28'
    cartNumber = '.ico-wishlist > .cart-label'
    itemInCart = '.cart-item-row'
    wishlistNumber = '.wishlist-qty'

    addToWishlist() {
        cy
            .get(this.btnAddToCart)
            .click()
    }
    openWishlist() {
        cy
            .get(this.cartNumber)
            .click()
    }
    getWishlistItem() {
        cy
            .get(this.itemInCart)
    }
    changeWishlist() {
        cy
            .get(this.wishlistNumber)
    }
}

export default ProductPage;