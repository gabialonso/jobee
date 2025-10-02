const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); 

const Purchase = sequelize.define("Purchase", {
    id_pucharse: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "courses", 
            key: "id",
        },
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        references: {
            model: "courses", 
            key: "price",
        },
    },
    currency: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: { 
            model: "courses", 
            key: "currency",
        },
    },
});

module.exports = Purchase;