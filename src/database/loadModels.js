const Users = require('../model/Users');
const Address = require('../model/Address');
const CreditCard = require('../model/CreditCard');
const Company = require('../model/Company');
const BankAccount = require('../model/BankAccount');
const Product = require('../model/Product');

function loadModels(connection) {
  console.log('Carregando Modelos');

  Users.init(connection);
  Address.init(connection);
  CreditCard.init(connection);
  Company.init(connection);
  BankAccount.init(connection);
  Product.init(connection);

  console.log('Carregando associações');

  Users.associate(connection.models);
  Address.associate(connection.models);
  CreditCard.associate(connection.models);
  Company.associate(connection.models);
  BankAccount.associate(connection.models);
  Product.associate(connection.models);
}

module.exports = loadModels;