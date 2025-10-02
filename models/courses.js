const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // conection whit db

const Course = sequelize.define("Course", {
    id_course: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    duration:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    themes:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    area:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    level:{
        type: DataTypes.ENUM('Básico', 'Intermedio', 'Avanzado'),
        allowNull: false,
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    currency:{
        type: DataTypes.STRING(10),
        allowNull: false,
    },
});