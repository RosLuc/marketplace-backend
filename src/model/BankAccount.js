const { Model, DataTypes } = require('sequelize');

class BankAccount extends Model{
  static init(sequelize) {
    super.init({
      bank: DataTypes.STRING,
      type_account: DataTypes.DATE,
      legal_person: DataTypes.BOOLEAN,
      cnpj_cpf: DataTypes.STRING,
      name: DataTypes.STRING,
      agency: DataTypes.STRING,
      agency_digit: DataTypes.STRING,
      number_account: DataTypes.STRING,
      account_digit: DataTypes.STRING,
    }, {
      tableName: "bank_account",
      sequelize
    });
  };

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
  };
};

module.exports = BankAccount;