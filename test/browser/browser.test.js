const { expect } = require('chai');
const { selenium } = require('../helpers');
const productsInProductsFile = require('../../src/server/products.json');

describe('Browser Tests', () => {
  let browser;

  before(async () => {
    browser = await selenium.getBrowser();
    const loadingNotification = await browser.$('.t-loading');
    await loadingNotification.waitForExist(3000, true); //wait for element to not exist
  });

  it('deletes the document with that id in the db, responds with 200 and no data', async () => {
    const title = await browser.getTitle();
    expect(title).to.equal('Product Filter Test');
  });

  it('should have a product type filter dropdown, once data has loaded', async () => {
    const filterersOnPage = await browser.$$('.t-filterer');
    expect(filterersOnPage).to.have.length(1);
  });

  it('should have a list of products, once data has loaded', async () => {
    const itemsListOnPage = await browser.$$('.t-itemsList');
    expect(itemsListOnPage).to.have.length(1);
    const text = await itemsListOnPage[0].getText();
    productsInProductsFile.forEach(product => {
      expect(text.toLowerCase()).to.contain(product.name);
    });
  });

  describe('filtering items based on product type', () => {
    it('should be able to filter vegetables', async () => {
      const aVegetable = productsInProductsFile.find(({ type }) => type === 'vegetables').name;
      const aNonVegetable = productsInProductsFile.find(({ type }) => type !== 'vegetables').name;

      const dropdown = await browser.$('.t-productTypeDropdown');
      await dropdown.click();

      const vegetablesOption = await browser.$('.t-vegetablesOption');
      await vegetablesOption.click();
      await vegetablesOption.waitForExist(3000, true); //wait for element to not exist

      const itemsListOnPage = await browser.$('.t-itemsList');
      const text = await itemsListOnPage.getText();
      expect(text.toLowerCase()).to.contain(aVegetable);
      expect(text.toLowerCase()).to.not.contain(aNonVegetable);
    });

    it('should be able to filter dairy', async () => {
      const aDairyProduct = productsInProductsFile.find(({ type }) => type === 'dairy').name;
      const aNonDairyProduct = productsInProductsFile.find(({ type }) => type !== 'dairy').name;

      const dropdown = await browser.$('.t-productTypeDropdown');
      await dropdown.click();

      const dairyOption = await browser.$('.t-dairyOption');
      await dairyOption.click();
      await dairyOption.waitForExist(3000, true); //wait for element to not exist

      const itemsListOnPage = await browser.$('.t-itemsList');
      const text = await itemsListOnPage.getText();
      expect(text.toLowerCase()).to.contain(aDairyProduct);
      expect(text.toLowerCase()).to.not.contain(aNonDairyProduct);
    });

    it('should be able to filter meat', async () => {
      const aMeatProduct = productsInProductsFile.find(({ type }) => type === 'meat').name;
      const aNonMeatProduct = productsInProductsFile.find(({ type }) => type !== 'meat').name;

      const dropdown = await browser.$('.t-productTypeDropdown');
      await dropdown.click();

      const meatOption = await browser.$('.t-meatOption');
      await meatOption.click();
      await meatOption.waitForExist(3000, true); //wait for element to not exist

      const itemsListOnPage = await browser.$('.t-itemsList');
      const text = await itemsListOnPage.getText();
      expect(text.toLowerCase()).to.contain(aMeatProduct);
      expect(text.toLowerCase()).to.not.contain(aNonMeatProduct);
    });
  });
});
