const Sequelize = require('sequelize');
const { development, production } = require('../config/database');
const loadModels = require('./loadModels');

const User = require("../model/Users");
const Address = require("../model/Users");
const Banck = require("../model/BankAccount");

require('dotenv');

const config = process.env.NODE_ENV === 'production' ? production : development;
const connection = new Sequelize(config);

loadModels(connection);

module.exports = connection;