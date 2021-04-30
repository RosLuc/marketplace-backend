const express = require('express');

const userController = require("./controller/userController");
const addressController = require("./controller/addressController");
const bankAccountController = require('./controller/bankAccountController');

const userValidator = require("./validators/userValidator");
const addressValidator = require("./validators/addressValidator");
const bankAccountValidator = require('./validators/bankAccountValidator');

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

//Bank Account Routes
routes.post('/bankAccount', bankAccountValidator.CreateBody, bankAccountController.create);
routes.get('/bankAccount/list/:user_id', bankAccountController.list);
routes.get('/bankAccount/:account_id', bankAccountController.view);
routes.put('/bankAccount/:account_id', bankAccountValidator.UpdateBody, bankAccountController.update);
routes.delete('/bankAccount/:account_id', bankAccountController.delete);

module.exports = routes;