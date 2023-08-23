const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://{username}:{password}@cluster0.aprnj2o.mongodb.net/{Database_Name}";

const connectToMongo = async () => {
  const db = await mongoose.connect(mongoURI);
  console.log(db.connection.readyState);
};

module.exports = connectToMongo;
