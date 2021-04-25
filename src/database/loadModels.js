const Users = require('../model/Users');
const Address = require('../model/Address');
const BankAccount = require('../model/BankAccount');

function loadModels(connection) {
  console.log('Carregando Modelos');

  Users.init(connection);
  Address.init(connection);
  BankAccount.init(connection);

  console.log('Carregando associações');

  Users.associate(connection.models);
  Address.associate(connection.models);
  BankAccount.associate(connection.models);
}

module.exports = loadModels;