class ProductPage {
    
    constructor() {
        this.productTitle = element(by.css(".sixty.text-left.chooser h2"));
    }

    getProductTitle() {
        return this.productTitle.getText();
    }
}

module.exports = ProductPage;
