const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    trim: true,
    lowerCase: true
  },
  
  password: {
    type: String,
    required: [true, "Your password is required"],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = new mongoose.model("users", userSchema);