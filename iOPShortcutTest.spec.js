// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('IOP Shortcut Test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('IOP Shortcut Test', async function() {
    // Test name: IOP Shortcut Test
    // Step # | name | target | value
    // 1 | open | http://localhost:819/solutions/nipc/ | 
    await driver.get("http://localhost:819/solutions/nipc/")
    // 2 | setWindowSize | 1552x880 | 
    await driver.manage().window().setRect({ width: 1552, height: 880 })
    // 3 | click | linkText=Sign In | 
    await driver.findElement(By.linkText("Sign In")).click()
    // 4 | click | css=.submit-border > input | 
    await driver.findElement(By.css(".submit-border > input")).click()
    // 5 | click | css=li:nth-child(2) span | 
    await driver.findElement(By.css("li:nth-child(2) span")).click()
    // 6 | click | linkText=New Application | 
    await driver.findElement(By.linkText("New Application")).click()
    // 7 | mouseOver | linkText=New Application | 
    {
      const element = await driver.findElement(By.linkText("New Application"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 8 | mouseOut | linkText=New Application | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 9 | click | linkText=Saved Applications | 
    await driver.findElement(By.linkText("Saved Applications")).click()
    // 10 | mouseOver | linkText=Saved Applications | 
    {
      const element = await driver.findElement(By.linkText("Saved Applications"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 11 | mouseOut | linkText=Saved Applications | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 12 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 13 | click | linkText=Submitted Applications | 
    await driver.findElement(By.linkText("Submitted Applications")).click()
    // 14 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 15 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 16 | click | linkText=Queried Applications | 
    await driver.findElement(By.linkText("Queried Applications")).click()
    // 17 | click | linkText=Completed Applications | 
    await driver.findElement(By.linkText("Completed Applications")).click()
    // 18 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 19 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 20 | click | css=.even:nth-child(2) .btn-xs | 
    await driver.findElement(By.css(".even:nth-child(2) .btn-xs")).click()
    // 21 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 22 | click | css=li:nth-child(3) span | 
    await driver.findElement(By.css("li:nth-child(3) span")).click()
    // 23 | click | linkText=New Application | 
    await driver.findElement(By.linkText("New Application")).click()
    // 24 | click | linkText=Saved Applications | 
    await driver.findElement(By.linkText("Saved Applications")).click()
    // 25 | mouseOver | linkText=Saved Applications | 
    {
      const element = await driver.findElement(By.linkText("Saved Applications"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 26 | mouseOut | linkText=Saved Applications | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 27 | click | css=.even .btn-xs | 
    await driver.findElement(By.css(".even .btn-xs")).click()
    // 28 | click | linkText=Queried Applications | 
    await driver.findElement(By.linkText("Queried Applications")).click()
    // 29 | click | linkText=Profiled Applications | 
    await driver.findElement(By.linkText("Profiled Applications")).click()
    // 30 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 31 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 32 | click | css=li:nth-child(4) span | 
    await driver.findElement(By.css("li:nth-child(4) span")).click()
    // 33 | click | linkText=New Application | 
    await driver.findElement(By.linkText("New Application")).click()
    // 34 | click | linkText=Extension Application | 
    await driver.findElement(By.linkText("Extension Application")).click()
    // 35 | click | linkText=Upload Auditted Accounts | 
    await driver.findElement(By.linkText("Upload Auditted Accounts")).click()
    // 36 | click | linkText=Saved Applications | 
    await driver.findElement(By.linkText("Saved Applications")).click()
    // 37 | mouseOver | linkText=Saved Applications | 
    {
      const element = await driver.findElement(By.linkText("Saved Applications"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 38 | mouseOut | linkText=Saved Applications | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 39 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 40 | click | linkText=Submitted Applications | 
    await driver.findElement(By.linkText("Submitted Applications")).click()
    // 41 | click | linkText=Queried Applications | 
    await driver.findElement(By.linkText("Queried Applications")).click()
    // 42 | click | linkText=Completed Applications | 
    await driver.findElement(By.linkText("Completed Applications")).click()
    // 43 | click | css=li:nth-child(5) span | 
    await driver.findElement(By.css("li:nth-child(5) span")).click()
    // 44 | click | linkText=Verification Visit | 
    await driver.findElement(By.linkText("Verification Visit")).click()
    // 45 | click | linkText=Monitoring & Evalution | 
    await driver.findElement(By.linkText("Monitoring & Evalution")).click()
    // 46 | mouseOver | linkText=Monitoring & Evalution | 
    {
      const element = await driver.findElement(By.linkText("Monitoring & Evalution"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 47 | mouseOut | linkText=Monitoring & Evalution | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 48 | click | css=li:nth-child(6) span | 
    await driver.findElement(By.css("li:nth-child(6) span")).click()
    // 49 | click | linkText=Unprocessed Payments | 
    await driver.findElement(By.linkText("Unprocessed Payments")).click()
    // 50 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 51 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 52 | click | css=.even:nth-child(2) .btn-xs | 
    await driver.findElement(By.css(".even:nth-child(2) .btn-xs")).click()
    // 53 | mouseOver | css=.even:nth-child(2) .btn-xs | 
    {
      const element = await driver.findElement(By.css(".even:nth-child(2) .btn-xs"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 54 | mouseOut | css=.row_selected .btn-xs | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 55 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 56 | click | linkText=Verified Payments | 
    await driver.findElement(By.linkText("Verified Payments")).click()
    // 57 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 58 | click | id=modal-popup-close | 
    await driver.findElement(By.id("modal-popup-close")).click()
    // 59 | click | css=li:nth-child(7) span | 
    await driver.findElement(By.css("li:nth-child(7) span")).click()
    // 60 | click | linkText=New Enquiry | 
    await driver.findElement(By.linkText("New Enquiry")).click()
    // 61 | click | linkText=Pending Enquiries | 
    await driver.findElement(By.linkText("Pending Enquiries")).click()
    // 62 | click | linkText=Replied Enquiries | 
    await driver.findElement(By.linkText("Replied Enquiries")).click()
    // 63 | click | css=li:nth-child(8) span | 
    await driver.findElement(By.css("li:nth-child(8) span")).click()
    // 64 | click | linkText=Unresolved Queries | 
    await driver.findElement(By.linkText("Unresolved Queries")).click()
    // 65 | click | linkText=Resolved Queries | 
    await driver.findElement(By.linkText("Resolved Queries")).click()
    // 66 | click | css=.odd:nth-child(1) .btn-xs | 
    await driver.findElement(By.css(".odd:nth-child(1) .btn-xs")).click()
    // 67 | click | css=.btn-default | 
    await driver.findElement(By.css(".btn-default")).click()
    // 68 | click | css=.close > .icon-remove | 
    await driver.findElement(By.css(".close > .icon-remove")).click()
    // 69 | click | css=li:nth-child(9) span | 
    await driver.findElement(By.css("li:nth-child(9) span")).click()
    // 70 | click | css=.live-chat > span | 
    await driver.findElement(By.css(".live-chat > span")).click()
    // 71 | click | css=li:nth-child(11) span | 
    await driver.findElement(By.css("li:nth-child(11) span")).click()
  })
})