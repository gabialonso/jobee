const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // conection whit db

const Company = sequelize.define("Company", {

    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "User", // relation to table users
            key: "id_user"
        },
    },
    rut: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false    
    },
    legal_reason:{
        type: DataTypes.STRING(100)
    },
    bussiness_name:{
        type: DataTypes.STRING(100)
    },
    groups:{
        type: DataTypes.STRING(100)
    },
    sub_groups:{
        type: DataTypes.STRING(100)
    },
    

});