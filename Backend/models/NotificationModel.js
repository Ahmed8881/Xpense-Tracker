const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db.js");

const Notification = sequelize.define("Notification", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Seen: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
// Notification.sync();
module.exports = Notification;
