const { Model, DataTypes } = require('sequelize');

class Address extends Model{
  static init(sequelize) {
    super.init({
      uf: DataTypes.STRING,
      cep: DataTypes.STRING,
      address: DataTypes.STRING,
      comp: DataTypes.STRING,
      district: DataTypes.STRING,
      number: DataTypes.INTEGER,
      city: DataTypes.STRING,
    }, {
      tableName: "address",
      sequelize
    });
  };

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
  };
};

module.exports = Address;