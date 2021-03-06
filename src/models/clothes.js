'use strict';

const clothesModel = (sequelize, DataTypes) => {
  return sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    material: {
      type: DataTypes.STRING,
      required: false
    }
  });
}

module.exports = clothesModel;
