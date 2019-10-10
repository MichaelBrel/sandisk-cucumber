const {Given, When, Then} = require('cucumber');
const {defineSupportCode} = require('cucumber');
const MainPage = require('../pages/MainPage');
let mainPage = new MainPage();
const SsdPage = require('../pages/SsdPage');
let ssdPage = new SsdPage();
const ProductPage = require('../pages/ProductPage');
let productPage = new ProductPage();
const expect = require('expect');

defineSupportCode(({
    setDefaultTimeout
}) => {
    setDefaultTimeout(20 * 1000);
});

Given("User opens main page", function () {
    return mainPage.open();
});

When("User clicks SSD reference", function () {
    return mainPage.clickSsdRef();
});

When("User clicks learn more button of a {string}", function (chosenProduct) {
    return ssdPage.clickLearnMoreButton(chosenProduct);
});

Then("User checks that product title at product page is {string}", function (chosenProduct) {
    return productPage.getProductTitle()
        .then((actualProductTitle) => {
            expect(actualProductTitle).toEqual(chosenProduct);
        })
});
