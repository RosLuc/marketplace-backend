const express = require('express');
const { validate } = require('express-validation');

const userController = require("./controller/userController");

const userValidator = require("./validators/userValidator");

const routes = express.Router();

routes.get('/', userController.index);
routes.post('/user', validate(userValidator.CreateBody, {}, {}), userController.create);

module.exports = routes;