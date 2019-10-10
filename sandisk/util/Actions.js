class Actions {

    moveToElement(element) {
        return browser.executeScript("arguments[0].scrollIntoView({" +
            "behavior: 'auto'," +
            "block: 'center'," +
            "inline: 'center'" +
            "})", element);
    }

    moveAndClick(element) {
        return this.moveToElement(element)
            .then(() => {
                return element.click()
            });
    }
}

module.exports = Actions;
