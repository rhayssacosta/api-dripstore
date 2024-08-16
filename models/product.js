'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    enabled: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    use_in_menu: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    price_with_discount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};