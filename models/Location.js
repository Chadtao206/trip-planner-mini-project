const sequelize = require("../config/connection");
const { Model, DataTypes } = require('sequelize');

class Locacion extends Model {}

Locacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
    type: DataTypes.STRING,
    allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location',
  }
);

module.exports = Locacion;