const { Model, DataTypes } = require('sequelize');

class BankAccount extends Model{
  static init(sequelize) {
    super.init({
      bank: DataTypes.STRING,
      type_account: DataTypes.DATE,
      is_legal_person: DataTypes.BOOLEAN,
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
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
  };
};

module.exports = BankAccount;