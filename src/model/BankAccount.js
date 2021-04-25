const { Model, DataTypes } = require('sequelize');

class BankAccount extends Model{
  static init(sequelize) {
    super.init({
      number_card: DataTypes.STRING,
      validate_date: DataTypes.DATE,
      verify_nuber: DataTypes.INTEGER,
      cardholder: DataTypes.STRING,
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