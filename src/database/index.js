const Sequelize = require('sequelize');
const { development, production } = require('../config/database');
const loadModels = require('./loadModels');

require('dotenv');

const config = process.env.NODE_ENV === 'production' ? production : development;
const connection = new Sequelize(config);

loadModels(connection);

module.exports = connection;