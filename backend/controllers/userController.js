const userService = require("../services/userService");
const CustomErrors = require("../utils/customErrors");

class UserConroller {
  getUsers = async (req, res, next) => {
    try {
      const query = req.query;
      const users = await userService.getUsers(query);

      const resp = {
        data: users,
      };

      next(resp);
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);

      const resp = {
        data: user,
      };

      next(resp);
    } catch (e) {
      CustomErrors(e, next, "Invalid User Id", "CastError");
    }
  };

  getUserProfile = async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("You are unautorized!!");
      }

      const userProfile = await userService.getUserProfile(token);

      const resp = {
        data: userProfile,
      };

      next(resp);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new UserConroller();
