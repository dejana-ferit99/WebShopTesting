import ProductPage from "../../PageObjects/productPage";
import WishlistPage from "../../PageObjects/wishList";

describe('Wishlist page functionalities', () => {

    const productPage = new ProductPage;
    const wishlistPage = new WishlistPage;

    beforeEach(() => {
        cy
            .visit('/apparel-shoes')
            .productPageNavigation()
        productPage.addToWishlist()
        productPage.openWishlist()
    });

    it("Check if user can edit quantity items from Wishlist", function () {

        wishlistPage.changeWishlistQuanity()
        cy
            .type('2')
        wishlistPage.updateWishlist()
        wishlistPage.verifyWishlistUpdate()
        cy
            .should('have.value', '2')

    })
    it.only("Check if user can move item from wishlist to shopping cart", function () {

        wishlistPage.moveToShoppingCart()
        wishlistPage.verifyShoppingCartUpdate()
        cy
            .should('have.text', '(1)')

    })
})

