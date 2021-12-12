const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
    },
    release: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    rating: {
      type: DataTypes.INTEGER
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {
    timestamps: false
  })
};
