const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    const check = await User.findOne({ where: { email: email } });
    if (check) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ where: { email: email } }).catch(
      (err) => {
        console.log("Error: ", err.message);
      }
    );
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      message: `User logged in successfully`,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.changePass = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    if (!email || !oldPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  const { name, email, id } = req.body;

  try {
    if (!name || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [affectedRows] = await User.update(
      { name, email },
      { where: { id: id } }
    );

    if (affectedRows === 0) {
      return res.status(400).json({ message: "User not found" });
    } else {
      res.status(200).json({
        message: "User updated successfully",
        user: { id: id, name: name, email: email },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.destroy({ where: { id: id } });
    if (user) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all users
exports.getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
