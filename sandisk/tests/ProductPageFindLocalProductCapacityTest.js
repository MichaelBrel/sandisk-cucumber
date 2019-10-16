const {Given,When,Then} = require('cucumber');
const {defineSupportCode} = require('cucumber');
const ProductPage = require('../pages/ProductPage');
let productPage = new ProductPage();
const expect = require('expect');

defineSupportCode(({
    setDefaultTimeout
}) => {
    setDefaultTimeout(20 * 1000);
});

When("User clicks find local button", function () {
    return productPage.clickFindLocalButton();
});

When("User chooses product capacity at the find local window {string}", function (capacity) {
    return productPage.chooseFindLocalProductCapacity(capacity);
});

Then("User checks that product capacity at the find local window is {string}", function (expectedCapacity) {
    return productPage.getFindLocalProductCapacity(expectedCapacity)
        .then((actualProductCapacity) => {
            expect(actualProductCapacity).toEqual("CAPACITY: " + expectedCapacity);
        })
})
