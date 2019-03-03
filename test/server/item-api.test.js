const axios = require('axios');
const { expect } = require('chai');
const { server } = require('../helpers');

describe('Server Tests', () => {
  describe('get /api/items', async () => {
    it('reponds with 200 and a list of items in the db (without an _id)', async () => {
      const { data, status } = await axios.get(`${server.getDomain()}/api/items`);

      expect(status).to.equal(200);
      expect(data).to.be.an('array').with.length(1);
      expect(data).to.deep.equal([
        { testProp: 'testValue' },
      ]);
    });
  });
});
