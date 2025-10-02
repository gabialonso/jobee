
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // tu conexión
const Person = sequelize.define("Person", {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    references: {
        model: "User", // relation to table users
        key: "id_user"
    }
    },
    cedula: {
        type: DataTypes.STRING(9),
        unique: true,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100)
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY
    },
    institucion_educativa: {
        type: DataTypes.STRING(150)
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    cv_url: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: "personas",
    timestamps: false
});

module.exports = Person;