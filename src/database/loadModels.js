const Users = require('../model/Users');

function loadModels(connection) {
  console.log('Carregando Modelos');

  Users.init(connection);

  console.log('Carregando associações');

  Users.associate(connection.models);
}

module.exports = loadModels;