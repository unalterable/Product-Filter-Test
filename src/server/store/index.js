const initStore = () => {
  const getItems = () => [
    { testProp: 'testValue' },
  ];

  return { getItems };
};

module.exports = initStore;
