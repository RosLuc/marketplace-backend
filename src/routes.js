const express = require('express');

const userController = require("./controller/userController");
const addressController = require("./controller/addressController");
const creditCardController = require('./controller/creditCardController');

const userValidator = require("./validators/userValidator");
const addressValidator = require("./validators/addressValidator");
const creditCardValidator = require('./validators/creditCardValidator');

const routes = express.Router();

//Users Routes
routes.post('/user', userValidator.CreateBody, userController.create);
routes.get('/user/list', userController.list);
routes.put('/user/:user_id', userValidator.UpdateBody, userController.update);
routes.get('/user/:user_id', userController.view);
routes.delete('/user/:user_id', userController.delete);

//Address Routes
routes.post('/address', addressValidator.CreateBody, addressController.create);
routes.get('/address/list/:user_id', addressController.list);
routes.get('/address/:address_id', addressController.view);
routes.put('/address/:address_id', addressValidator.UpdateBody, addressController.update);
routes.delete('/address/:address_id', addressController.delete);

//Credit Card Routes
routes.post('/creditCard', creditCardValidator.CreateBody, creditCardController.create);
routes.get('/creditCard/list/:user_id', creditCardController.list);
routes.get('/creditCard/:card_id', creditCardController.view);
routes.put('/creditCard/:card_id', creditCardValidator.UpdateBody, creditCardController.update);
routes.delete('/creditCard/:card_id', creditCardController.delete);

module.exports = routes;