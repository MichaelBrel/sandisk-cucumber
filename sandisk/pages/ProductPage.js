const format = require('string-format');
const Actions = require('../util/Actions');
let actions = new Actions();
const Wait = require('../util/Wait');
let wait = new Wait();

class ProductPage {

    constructor() {
        this.productTitle = element(by.css(".sixty.text-left.chooser h2"));
        this.productCapacity = element(by.xpath("//div[@style='display: block;']//li//strong[contains(text(), 'Capacity:')]/parent::*"));
        this.productCapacityButtonXpath = "//div[@class='clearer']//*[contains(text(),'{}')]";
        this.regionDropDown = element(by.css("#region"));
        this.regionChoiceXpath = "//*[@id='region']//option[contains(text(),'{}')]";
        this.areaDropDown = element(by.css("#country-box"));
        this.areaChoiceXpath = "//*[@id='country-box']//option[contains(text(),'{}')]";
        this.firstDistributor = element(by.css(".address.ng-scope h4"));
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

    chooseRegion(region) {
        let regionChoiceElement = element(by.xpath(format(this.regionChoiceXpath, region)));
        return actions.moveAndClick(this.regionDropDown)
            .then(() => {
                regionChoiceElement.click();
            })
    }

    chooseArea(area) {
        let areaChoiceElement = element(by.xpath(format(this.areaChoiceXpath, area)));
        return actions.moveAndClick(this.areaDropDown)
            .then(() => {
                areaChoiceElement.click();
            })
    }

    getFirstDistributorName() {
        return wait.waitElementToBeVisible(this.firstDistributor)
            .then(() => {
                return this.firstDistributor.getText();
            })
    }

}

module.exports = ProductPage;
