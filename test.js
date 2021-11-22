

const webdriver = require('selenium-webdriver');
const by = webdriver.By

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com').then(e => {
    driver.findElement(by.name('q')).sendKeys('webdriver\n').then(title => {
        console.log(title);
        if (title == 'webdriver - Google Search') {
            console.log('Test Passed');
        } else {
            console.log('Test Failed');
        }
    });
});