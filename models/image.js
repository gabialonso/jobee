const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); 

const Post = sequelize.define("image", {
    id: {  
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true,
        reference:{
            model: 'posts',
            key: 'id'
        },
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptioin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    size_kb: {
        type: DataTypes.INTEGER,
        allowNull: false,},
    format: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});