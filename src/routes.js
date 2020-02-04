const { Router } = require('express');
const TradeController = require('./controllers/TradeController');

const routes = Router();

//Trades
routes.post('/trades/new', TradeController.store);
routes.delete('/trades/delete/:id', TradeController.destroy);
routes.put('/trades/edit/:id', TradeController.edit);
routes.get('/trades/all', TradeController.list);

module.exports = routes;