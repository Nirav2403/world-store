const mongoose = require("mongoose");

const UserProfileSchema = mongoose.Schema({
  id: {
    type: Number,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  address_1: {
    type: String,
    require: [true, "Please fill up your address"],
  },
  address_2: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const UserProfileModel = mongoose.model("User-profiles", UserProfileSchema);

module.exports = UserProfileModel;
