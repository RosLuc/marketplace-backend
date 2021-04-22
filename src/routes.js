const express = require('express');

const userController = require("./controller/userController");

const userValidator = require("./validators/userValidator");

const routes = express.Router();

routes.get('/', userController.index);
routes.post('/user', userValidator.CreateBody, userController.create);

module.exports = routes;