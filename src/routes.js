const express = require('express');

const userController = require("./controller/userController");
const userValidator = require("./validators/userValidator");

const addressController = require("./controller/addressController");

const routes = express.Router();

//Users Routes
routes.post('/user', userValidator.CreateBody, userController.create);
routes.get('/user/list', userController.list);
routes.put('/user/:user_id', userValidator.UpdateBody, userController.update);
routes.get('/user/:user_id', userController.view);
routes.delete('/user/:user_id', userController.delete);


//Address Routes
routes.get('/address', addressController.index);
routes.post('/address/:user_id', addressController.store);
routes.delete('/address/bbb', addressController.delete);


module.exports = routes;