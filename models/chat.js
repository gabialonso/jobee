const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Chat = sequelize.define("Chat", {
    id: {  
        type: DataTypes.INTEGER,    
        primaryKey: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_direct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    lastMessageAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});