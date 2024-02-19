require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 3000,
    appName: process.env.APP_NAME || "World Book",
    appUrl: process.env.APP_URL || "",
    env: process.env.NODE_ENV || "development",
  },
  db: {
    port: process.env.DB_PORT || 5000,
    database: process.env.DB_NAME || "book_store",
    password: process.env.DB_PASS || "worldbook@123",
    username: process.env.DB_USER || "book_store",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mongodb",
    logging: true,
    url: process.env.DB_URL || "",
  },
  auth: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expiresin: process.env.JWT_EXPIRES_IN || "1d",
    saltRounds: process.env.SALT_ROUND || 10,
    refresh_token_secret:
      process.env.REFRESH_TOKEN_SECRET || "VmVyeVBvd2VyZnVsbFNlY3JldA==",
    refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || "2d",
  },
  media: {
    path: process.env.MEDIA_PATH,
    full_path: process.env.MEDIA_FULL_PATH,
  },
};

module.exports = config;
