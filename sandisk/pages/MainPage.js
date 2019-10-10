class MainPage {
    
    constructor() {
        this.ssdRef = element(by.css("div#navbar a[href='/home/ssd.html']"));
    }

    open() {
        return browser.get(browser.baseUrl);
    }

    clickSsdRef() {
        return this.ssdRef.click();
    }

}

module.exports = MainPage;
