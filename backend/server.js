const app = require("./app");
const config = require("./config/appConfig");
const connectDB = require("./config/dbConfig");
const swaggerDocs = require("./utils/swagger");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
  swaggerDocs(app);
});
