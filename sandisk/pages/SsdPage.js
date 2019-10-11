const format = require('string-format');
const Actions = require('../util/Actions');
let actions = new Actions();

class SsdPage {
    
    constructor() {
        this.learnMoreXpath = "//*[contains(text(),'{}')]/following-sibling::*//a[contains(text(),'Learn More')]";
    }

    clickLearnMoreButton(productTitle) {
        let learnMoreButton = element(by.xpath(format(this.learnMoreXpath, productTitle)));
        return actions.moveAndClick(learnMoreButton);
    }

}

module.exports = SsdPage;
