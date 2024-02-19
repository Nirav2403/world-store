const userService = require("../services/userService");

class UserConroller {
  getUserList = async (req, res, next) => {
    try {
      const data = req.query;

      const users = await userService.getUsers();

      const resp = {
        data: users,
      };

      next(resp);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new UserConroller();
