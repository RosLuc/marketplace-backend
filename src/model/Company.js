const { Model, DataTypes } = require('sequelize');

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
      sequelize
    });
  };

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
  };
};

module.exports = Company;