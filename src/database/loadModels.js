const Users = require('../model/Users');
const Address = require('../model/Address');
const CreditCard = require('../model/CreditCard');

function loadModels(connection) {
  console.log('Carregando Modelos');

  Users.init(connection);
  Address.init(connection);
  CreditCard.init(connection);

  console.log('Carregando associações');

  Users.associate(connection.models);
  Address.associate(connection.models);
  CreditCard.associate(connection.models);
}

module.exports = loadModels;