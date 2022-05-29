const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   
    sequelize.define(
      'activity', 
    
      {
        id:{
           type:DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        difficult: {
          type: DataTypes.ENUM ("1","2","3","4","5"), 
        },
        duration: {
            type: DataTypes.STRING, 
        },
        season: { //temporada
            type: DataTypes.JSON, 
            
        },

      },
      {timestamps: false}
  );
};