const {Given,When,Then} = require('cucumber');
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

When("User chooses product capacity {string}", function (capacity) {
    return productPage.chooseProductCapacity(capacity);
});

Then("User checks that product capacity is {string}", function (expectedCapacity) {
    return productPage.getProductCapacity()
        .then((actualProductCapacity) => {
            expect(actualProductCapacity).toEqual("Capacity: " + expectedCapacity);
        })
})
