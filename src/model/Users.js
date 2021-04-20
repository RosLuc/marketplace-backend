const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Users extends Model{
  static init(sequelize) {
    super.init({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      type: DataTypes.INTEGER
    }, {
      sequelize,
      hooks: {
        beforeCreate: async (users, options) => {
          const hash = await bcrypt.hash(users.password, 10)
          users.password = hash;
        },
      }
    });
  };

  static associate(models) {
    
  };
};

module.exports = Users;