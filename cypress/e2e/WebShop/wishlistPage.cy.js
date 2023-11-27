import ProductPage from "../../PageObjects/productPage";
import WishlistPage from "../../PageObjects/wishList";

describe('Wishlist page functionalities', () => {

    const productPage = new ProductPage;
    const wishlistPage = new WishlistPage;

    beforeEach(() => {
        cy
            .visit('/apparel-shoes')
    });

    it("Check if user can edit quantity items from Wishlist", function () {

        cy
            .productPageNavigation()
        productPage.addToWishlist()
        productPage.openWishlist()
        wishlistPage.changeWishlistQuanity()
        wishlistPage.updateWishlist()
        wishlistPage.verifyWishlistUpdate()

    })
    it("Check if user can move item from wishlist to shopping cart", function () {

        cy
            .productPageNavigation()
        productPage.addToWishlist()
        productPage.openWishlist()
        wishlistPage.moveToShoppingCart()
        wishlistPage.updateWishlist()

    })
})

