const {Given, When,Then} = require('cucumber');
const {defineSupportCode} = require('cucumber');
const ProductPage = require('../pages/ProductPage');
let productPage = new ProductPage();
const expect = require('expect');

defineSupportCode(({
    setDefaultTimeout
}) => {
    setDefaultTimeout(20 * 1000);
});

When("User chooses {string} where to buy sandisk", function (region) {
    return productPage.chooseRegion(region);
});

When("User chooses {string}", function (area) {
    return productPage.chooseArea(area);
});

Then("User checks that {string} is displayed correctly", function (expectedDistributorName) {
    return productPage.getFirstDistributorName()
        .then((actualDistributorName) => {
            expect(actualDistributorName).toEqual(expectedDistributorName);
        })
})
