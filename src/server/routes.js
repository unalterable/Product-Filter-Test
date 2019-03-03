import express from 'express' ;
import bodyParser from 'body-parser';
import initStore from './store';
import indexController from './controllers/index';
import initItemController from './controllers/item';

const initRoutes = () => {
  const store = initStore();
  const itemController = initItemController({ store });
  const app = express();
  app.use(bodyParser.json());

  app.use('/assets', express.static('assets'));

  app.get('/api/items', itemController.getItems);

  app.get('/*', indexController.showIndex);

  return app;
};

module.exports = initRoutes;

