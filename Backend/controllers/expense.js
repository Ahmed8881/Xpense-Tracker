const Expense = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category_id, description, date, user_id } = req.body;

  try {
    if (
      !title ||!amount ||!category_id ||!description ||!date ||!user_id
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount < 0 || typeof amount !== "number") {
      return res.status(400).json({ message: "Amount cannot be negative" });
    }
    const expense = await Expense.create({
      user_id,
      category_id,
      title,
      amount,
      description,
      date,
    });

    res.status(200).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { category_id, sortBy } = req.query;
    let query = { user_id: userId };
    if (category_id) {
      query.category_id = category_id;
    }
    let sortOptions = [["createdAt", "DESC"]];

    if (sortBy === "amount_asc") {
      sortOptions = [["amount", "ASC"]];
    } else if (sortBy === "amount_desc") {
      sortOptions = [["amount", "DESC"]];
    }
     const expense = await Expense.findAll({ where: query, order: sortOptions });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateExpense = async (req, res) => {
  const { title, amount, category_id, description, date, user_id, id } =
    req.body;
  try {
    if (
      !title ||!amount ||!category_id ||!description ||!date ||!user_id
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount < 0 || typeof amount !== "number") {
      return res.status(400).json({ message: "Amount cannot be negative" });
    }
    const [affectedRows] = await Expense.update(
      {
        user_id,
        category_id,
        title,
        amount,
        description,
        date,
      },
      { where: { id } }
    );

    if (affectedRows === 0) {
      return res.status(400).json({ message: "Expense not found" });
    } else {
      res.status(200).json({ message: "Expense updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    await Expense.destroy({ where: { id: expenseId } });
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
