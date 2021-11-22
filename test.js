

const webdriver = require('selenium-webdriver'), 
    by = webdriver.By,
    config = require('./config'),
    env = 'dev';

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get(config[env].url).then(e => {
    driver.findElement(by.name('q')).sendKeys('webdriver\n').then(title => {
        console.log(title);
        if (title == 'webdriver - Google Search') {
            console.log('Test Passed');
        } else {
            console.log('Test Failed');
        }
    });
});