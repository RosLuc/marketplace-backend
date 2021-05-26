const { Model, DataTypes } = require('sequelize');

class Product extends Model{
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      total_amount: DataTypes.INTEGER,
      category: DataTypes.STRING,
      price: DataTypes.FLOAT,
      image: DataTypes.STRING,
      detail: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      tableName: "product",
      sequelize
    });
  };

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
    
  };
};

module.exports = Product;