const express = require('express');

const userController = require("./controller/userController");
const userValidator = require("./validators/userValidator");

const addressController = require("./controller/addressController");

const routes = express.Router();


routes.get('/', userController.index);
routes.post('/user', userValidator.CreateBody, userController.create);
routes.delete('/user', userController.delete);

routes.get('/address', addressController.index);
routes.post('/address', addressController.create);
routes.delete('/address', addressController.delete);


module.exports = routes;