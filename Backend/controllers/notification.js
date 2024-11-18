const Notification = require("../models/NotificationModel");

exports.addNotification = async (req, res) => {
  const { user_id, message } = req.body;
  try {
    if (!user_id || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const notification = await Notification.create({
      user_id,
      message,
    });
    res.status(200).json({ message: "Notification added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
};

exports.getNotification = async (req, res) => {
  try {
    const userId = req.params.userId;
    const notification = await Notification.findAll({
      where: { user_id: userId },
    });
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.destroy({ where: { id } });
    if (notification) {
      res.status(200).json({ message: "Notification deleted successfully" });
    } else {
      res.status(400).json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// use in future
exports.seenNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findOne({ where: { id } });
    if (notification) {
      notification.Seen = true;
      await notification.save();
      res.status(200).json({ message: "Notification seen successfully" });
    } else {
      res.status(400).json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
