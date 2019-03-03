const initItemController = ({ store }) => {
  const getItems = async (req, res) => {
    try {
      const allitems = await store.getItems();
      res.send(allitems);
    } catch (err) {
      console.error(err);
      res.status(400).send(err.message);
    }
  };

  return {
    getItems,
  };
};

module.exports = initItemController;
