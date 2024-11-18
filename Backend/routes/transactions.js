const {
  addExpense,
  getExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncome,
  deleteIncome,
  updateIncome,
} = require("../controllers/income");
const {
  signUp,
  signIn,
  changePass,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/user");
const {
  getCategory,
  addCategory,
  deleteCategory,
} = require("../controllers/category");
const {
  getGoal,
  addGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goals");
const {
  getNotification,
  addNotification,
  deleteNotification,
  seenNotification,
} = require("../controllers/notification");
const { addFeedback, getFeedback } = require("../controllers/feedback");

const router = require("express").Router();

// Income
router
  .post("/add-income", addIncome)
  .get("/get-income/:userId", getIncome)
  .delete("/delete-income/:id", deleteIncome)
  .put("/update-income", updateIncome)
  // Expense
  .post("/add-expense", addExpense)
  .get("/get-expense/:userId", getExpense)
  .delete("/delete-expense/:id", deleteExpense)
  .put("/update-expense", updateExpense)
  // User
  .post("/signUp", signUp)
  .post("/signIn", signIn)
  .post("/changePass", changePass)
  .put("/update-user", updateUser)
  .delete("/delete-user/:id", deleteUser)
  .get("/get-users", getUser)
  // Category
  .get("/get-category", getCategory)
  .post("/add-category", addCategory)
  .delete("/delete-category/:id", deleteCategory)
  // Goal
  .get("/get-goal/:user_id", getGoal)
  .post("/add-goal", addGoal)
  .delete("/delete-goal/:id", deleteGoal)
  .put("/update-goal", updateGoal)
  // Notification
  .get("/get-notification/:userId", getNotification)
  .post("/add-notification", addNotification)
  .delete("/delete-notification/:id", deleteNotification)
  .put("/seen-notification/:id", seenNotification)
  // Feedback
  .get("/get-feedback/:userId", getFeedback)
  .post("/add-feedback", addFeedback)
module.exports = router;
