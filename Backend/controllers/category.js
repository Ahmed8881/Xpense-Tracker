const Category = require("../models/CategoryModel");

exports.addCategory = async (req, res) => {
  const { type, name } = req.body;
  try {
    if (!type || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const category = await Category.create({
      type,
      name,
    });
    res.status(200).json({ message: "Category added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.destroy({ where: { id } });
    if (category) {
      res.status(200).json({ message: "Category deleted successfully" });
    } else {
      res.status(400).json({ message: "Category not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
