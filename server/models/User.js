const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Email is required"],
      minLength: [10, 'Email is too short and should be at least 10 characters long.']
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
  },
  
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);