const mongoose = require("mongoose");
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const connectionString = `mongodb://${dbUser}:${dbPassword}@mongo:27017/`;

// Databse connection
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(connectionString, options)
  .then((_) => console.log("Connection successful!"))
  .catch((err) => console.log(`Connection error: ${err.message}`));

const db = mongoose.connection;

module.exports = db 
