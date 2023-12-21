class ProductPageList {

    selPriceRange = ".price-range-selector > :nth-child(1) > a"
    delPriceRange = ".remove-price-range-filter"
    selPageSize = "#products-pagesize"
    productGrid = ".product-grid"
    productBox = ".item-box"

    selectPriceRange() {
        cy
            .get(this.selPriceRange)
            .click()
    }
    getPriceRangeResults() {
        cy
            .request('https://demowebshop.tricentis.com/books?price=-25')
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    }
    removePriceRange() {
        cy
            .get(this.delPriceRange)
            .click()
    }
    selectPageSize(pageSize) {
        cy
            .get(this.selPageSize)
            .select(pageSize.toString())
    }
    getPageSizeResults(pageSize) {
        cy
            .get(this.productGrid)
            .find(this.productBox)
    }
}

export default ProductPageList;