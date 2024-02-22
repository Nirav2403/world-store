const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: String,
      require: [true, "Please fill up your first name"],
    },
    lastName: {
      type: String,
      require: [true, "Please fill up your last name"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide valid email address"],
    },
    phoneNo: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please fill your password"],
      minLength: 8,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "staff", "customer"],
      default: "customer",
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    token: { type: String },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User-profile",
    },
  },
  {
    methods: {
      correctPassword: async (typedPassword, originalPassword) => {
        return await bcrypt.compare(typedPassword, originalPassword);
      },
    },
    virtuals: {
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
    },
  }
);

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
