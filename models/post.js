const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); 

const Post = sequelize.define("Post", {
    id_course:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincrement: true,
        primaryKey: true,
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createAt:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    author_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        Reference:{
            model: "User",
            key: "id",
        },
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true,
        refernce:{
            model: "Image",
            key: "id",
        },
    },
    Comments:{
        type: DataTypes.STRING,
        allowNull: true,
        },
        
    like:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
})