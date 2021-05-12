const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Company extends Model{
  static init(sequelize) {
    super.init({
      fantasy_name: DataTypes.STRING,
      company_name: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      tableName: "company",
      sequelize,
      hooks: {
        beforeCreate: async (users, options) => {
          const hash = await bcrypt.hash(users.password, 10)
          users.password = hash;
        },
        beforeUpdate: async (users, options) => {
          const hash = await bcrypt.hash(users.password, 10)
          users.password = hash;
        },
      }
    });
  };

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "company_id", as: "Addresses" });
    this.hasMany(models.BankAccount, { foreignKey: "company_id", as: "Account" });
  };
};

module.exports = Company;