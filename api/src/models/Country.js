const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'country', 
    {
      id: {
        type: DataTypes.STRING, 
        
        validate: {
          isAlpha: true,
          len: [3],
        },
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flags: { //bandera
        type: DataTypes.STRING, 
        allowNull: false,
      },
      continents: {
        type: DataTypes.STRING, // ejemplo "Oceania"
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING, // ej "Paramaribo"
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING, //ej "South America"
        
      },
      area: {
        type: DataTypes.DECIMAL, //ej 309500 FLOAT
        
      },
      population: {
        type: DataTypes.INTEGER, // ej 6871287 FLOAT
        
      },
     

  },
  {timestamps: false}
  );
};
