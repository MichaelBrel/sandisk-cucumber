class Wait {
    constructor() {
        this.EC = protractor.ExpectedConditions;
    }

    waitElementToBeVisible(element) {
        return browser.wait(this.EC.visibilityOf(element), 5000);
    }

    waitElementToBeClickable(element) {
        return browser.wait(this.EC.elementToBeClickable(element), 5000);
    }
}

module.exports = Wait;
