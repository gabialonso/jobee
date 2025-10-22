const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // conection whit db

const User = sequelize.define("User", {
    id_user: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        Reference: {
            model: "user",
            key: "id_user"
        },
    },
    type_user: {
        type: DataTypes.ENUM('persona', 'empresa'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull: false,
        byScript: true,
    },
    createAt:{
        type: DataTypes.DATE,
    },
    updateAt:{
        type: DataTypes.DATE,
    },
});

User.hasMany(JobApplication, { foreignKey: 'user_id' });
JobApplication.belongsTo(User, { foreignKey: 'user_id' });


