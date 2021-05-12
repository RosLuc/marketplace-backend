const express = require('express');

const userController = require("./controller/userController");
const addressController = require("./controller/addressController");
const creditCardController = require('./controller/creditCardController');
const companyController = require('./controller/companyController');
const bankAccountController = require('./controller/bankAccountController');

const userValidator = require("./validators/userValidator");
const addressValidator = require("./validators/addressValidator");
const creditCardValidator = require('./validators/creditCardValidator');
const companyValidator = require('./validators/companyValidator');
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

//Credit Card Routes
routes.post('/creditCard', creditCardValidator.CreateBody, creditCardController.create);
routes.get('/creditCard/list/:user_id', creditCardController.list);
routes.get('/creditCard/:card_id', creditCardController.view);
routes.put('/creditCard/:card_id', creditCardValidator.UpdateBody, creditCardController.update);
routes.delete('/creditCard/:card_id', creditCardController.delete);

//Company Routes
routes.post('/company', companyValidator.CreateBody, companyController.create);
routes.get('/company/list', companyController.list);
routes.get('/company/:company_id', companyController.view);
routes.put('/company/:company_id', companyValidator.UpdateBody, companyController.update);
routes.delete('/company/:company_id', companyController.delete);

//Bank account Routes
routes.post('/bankAccount', bankAccountValidator.CreateBody, bankAccountController.create);
routes.get('/bankAccount/list/:company_id', bankAccountController.list);
routes.get('/bankAccount/:account_id', bankAccountController.view);
routes.put('/bankAccount/:account_id', bankAccountValidator.UpdateBody, bankAccountController.update);
routes.delete('/bankAccount/:account_id', bankAccountController.delete);

module.exports = routes;