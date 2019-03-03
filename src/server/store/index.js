const initStore = () => {
  const getItems = () => require('../products.json');

  return { getItems };
};

module.exports = initStore;
