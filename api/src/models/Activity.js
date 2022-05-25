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
        
        difficulty: {
          type: DataTypes.ENUM ("1", "2", "3", "4", "5"), 
        },
        duration: {
            type: DataTypes.STRING, 
        },
        season: { //temporada
            type: DataTypes.ENUM ("Summer", "Autum", "Winter", "Spring"), 
            
        },

      },
      {timestamps: false}
  );
};