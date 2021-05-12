const { Model, DataTypes } = require('sequelize');

class CreditCard extends Model{
  static init(sequelize) {
    super.init({
      number_card: DataTypes.STRING,
      validate_date: DataTypes.DATE,
      verify_number: DataTypes.INTEGER,
      cardholder: DataTypes.STRING,
    }, {
      tableName: "credit_card",
      sequelize
    });
  };

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
  };
};

module.exports = CreditCard;