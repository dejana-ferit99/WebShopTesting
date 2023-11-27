import ProductPageList from "../../PageObjects/productPageList";
describe('Product list functionalities', () => {

    const productPageList = new ProductPageList;

    beforeEach(() => {
        cy
            .visit('')
    });
    it("Check if user can open all Books avaliable from header menu", function () {
        cy
            .get('.top-menu > :nth-child(1) > a').click()
            .get('h1').should('have.text', 'Books')
    })
    it("Check if user can correctly filter by price", function () {
        cy
            .visit('/books')
        productPageList.selectPriceRange()
        productPageList.getPriceRangeResults()
    })
    it("Check if user can remove filter by price filter", function () {
        cy
            .visit('/books')
        productPageList.selectPriceRange()
        productPageList.getPriceRangeResults()
        productPageList.removePriceRange()
    })

    it("Check if user can correctly display 4 items per page", function () {
        cy
            .visit("/books")
        productPageList.selectPageSize4()
        productPageList.getPageSizeResults4()
    })

    it("Check if user can correctly display 12 items per page", function () {
        cy
            .visit("/apparel-shoes")
        productPageList.selectPageSize12()
        productPageList.getPageSizeResults12()
    })
    it("Check if user can add item to chart directly from list of products", function () {
        cy
            .visit('/desktops')
            .get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
            .get('.cart-qty').should('have.text', '(1)')
    })
    it("Check if user can add item to cart from product page", function () {
        cy
            .visit('/apparel-shoes')
            .get(':nth-child(2) > .product-item > .details > .product-title > a').click()
            .get('#add-to-cart-button-28').click()
            .get('#bar-notification').invoke('show')
            .should('have.text', 'The product has been added to your shopping cart')
    })

});
