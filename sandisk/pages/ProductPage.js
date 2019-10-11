const format = require('string-format');
const Actions = require('../util/Actions');
let actions = new Actions();

class ProductPage {

    constructor() {
        this.productTitle = element(by.css(".sixty.text-left.chooser h2"));
        this.productCapacity = element(by.xpath("//div[@style='display: block;']//li//strong[contains(text(), 'Capacity:')]/parent::*"));
        this.productCapacityButtonXpath = "//div[@class='clearer']//*[contains(text(),'{}')]";
    }

    getProductTitle() {
        return this.productTitle.getText();
    }

    chooseProductCapacity(capacity) {
        let productCapacityButton = element(by.xpath(format(this.productCapacityButtonXpath, capacity)));
        return actions.moveAndClick(productCapacityButton);
    }

    getProductCapacity() {
        return this.productCapacity.getText();
    }

}

module.exports = ProductPage;
