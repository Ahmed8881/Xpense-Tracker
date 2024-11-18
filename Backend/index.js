const express = require("express");
const cors = require("cors");
const { db, sequelize } = require("./db/db.js");
const { fs, readdirSync } = require("fs");
const User = require("./models/userModel");
const Category = require("./models/CategoryModel");
const Income = require("./models/incomeModel");
const Expense = require("./models/expenseModel");
const Notification = require("./models/NotificationModel");
const Goals = require("./models/GoalsModel");

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares

app.use(express.json()); // to parse json data
app.use(cors()); // to avoid cors error

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
); // to use all routes from routes folder
const server = () => {
  sequelize.sync();
  db();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
