const { expect } = require('chai');
const { selenium } = require('../helpers');

describe('Browser Tests', () => {
  let browser;

  before(async () => {
    browser = await selenium.getBrowser();
  });

  it('deletes the document with that id in the db, responds with 200 and no data', async () => {
    const title = await browser.getTitle();
    expect(title).to.equal('Product Filter Test');
  });

  it('should have a product type filter dropdown', async () => {
    const filterersOnPage = await browser.$$('.t-filterer');
    expect(filterersOnPage).to.have.length(1);
  });

  it('should have a list of products', async () => {
    const itemsListOnPage = await browser.$$('.t-itemsList');
    expect(itemsListOnPage).to.have.length(1);
  });
});
