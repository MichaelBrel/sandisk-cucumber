exports.config = {

    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    baseUrl:'https://www.sandisk.com',

    specs: [
        './tests/features/*.feature'
    ],

    cucumberOpts: {
        require: './tests/*.js',
        format: 'summary'
    },

    onPrepare: function(){
        browser.manage().window().maximize();
    }

};
