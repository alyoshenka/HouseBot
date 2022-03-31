const mongoose = require("mongoose");

const notification = mongoose.Schema({
  date: Date,
  notif: String,
});

module.exports = mongoose.model("Notification", notification);
