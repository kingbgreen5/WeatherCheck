const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init( {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, 
  
  {

    sequelize,
    tableName: 'cities',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cities',

  });

//   sequelize.sync()
//   .then(() => {
//     console.log('Cities class inititated.');
//   })
//   .catch((err) => {
//     console.error('Unable to create table:', err);
//   });

module.exports = City;
