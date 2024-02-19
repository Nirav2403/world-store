const User = require("../models/UserModel");

class UserService {
  createUser = async (user) => {
    const data = User.create(user);
    return data;
  };

  isValidPassword = (user) => {
    const { email, password } = user || {};
    return User.findOne({ email })
      .select("password")
      .then((user) => user.correctPassword(password, user.password));
  };

  getUsers = (user) => {
    const data = User.find(user);
    return data;
  };

  getUserById = (id) => {
    return User.findById(id);
  };

  getUser = (user) => {
    return User.findOne(user);
  };
}

module.exports = new UserService();
