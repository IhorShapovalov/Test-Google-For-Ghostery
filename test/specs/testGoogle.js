const expectedText = require('../data/expected.json').text;
const selector = require('../data/selectors.json').selectors;

describe('Test Google Page', () => {
  before(() => {
    browser.url('/');
    browser.deleteAllCookies();
    browser.maximizeWindow();
  });
  it('TC001 should google.com is open', () => {
    expect(browser.getTitle()).toEqual(expectedText.title);
  });
  it('TC002 should inputField is clickable', () => {
    expect($(selector.inputField).isClickable()).true;
  });
  it('TC003 should Submit Btn is clickable', () => {
    expect($(selector.submitBtn).isClickable()).true;
  });
  it('TC004 should Microphone Btn is clickable', () => {
    expect($(selector.microphone).isClickable()).true;
  });
  it('TC005 should Search Icon is displayed', () => {
    expect($(selector.microphone).isDisplayed()).true;
  });
  it('TC006 should input Ghostery in input field ', () => {
    $(selector.inputField).click();
    $(selector.inputField).setValue(expectedText.companyName);
    expect($(selector.inputField).getValue()).toEqual(expectedText.companyName);
  });
  it('TC007 should input Ghostery in input field ', () => {
    expect($(selector.xBtn).isClickable()).true
  });
  it('TC008 should have correct text in input field', () => {
    $(selector.submitBtn).click();
    expect($(selector.inputField).getValue()).toEqual(expectedText.companyName);
  });
  it('TC009 search result should contain search text', () => {
    expect($(selector.firstResult).getText()).toContain(expectedText.companyName);
  });
});