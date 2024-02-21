const User = require("../models/UserModel");
const APIFeatures = require("../utils/apiFeature");

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

  getUsers = async (queryString) => {
    const query = User.find();
    const users = new APIFeatures(query, queryString)
      .paginate()
      .sort()
      .limitFields();
    const data = await users.query;
    return data;
  };

  getUserById = (id) => {
    return User.findById(id);
  };

  getUserProfile = async (token) => {
    const user = await User.findOne({ token }).populate('profile').exec();
    return user;
  };
}

module.exports = new UserService();
