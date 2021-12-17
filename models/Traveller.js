const sequelize = require("../config/connection");
const { Model, DataTypes } = require('sequelize');

class Traveller extends Model {}

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
        },
    email: {
    type: DataTypes.STRING,
    allowNull: false
        }
  },
  {
    sequelize,
    timestamps: false,
      freezeTableName: true,
    underscored: true,
    modelName: 'traveller',
  }
);

module.exports = Traveller;