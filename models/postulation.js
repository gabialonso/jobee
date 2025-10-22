const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Postulation = sequelize.define("Postulation", {
    id_postulation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    company_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    area: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    requirements: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    job_type: {
        type: DataTypes.ENUM('Tiempo completo', 'Medio tiempo', 'Freelance', 'Prácticas'),
        allowNull: false,
    },
    themes: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    posted_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.ENUM('Activa', 'Cerrada'),
        defaultValue: 'Activa',
    },
});

Postulation.hasMany(JobApplication, { foreignKey: 'postulation_id' });
JobApplication.belongsTo(Postulation, { foreignKey: 'postulation_id' });


module.exports = Postulation;

