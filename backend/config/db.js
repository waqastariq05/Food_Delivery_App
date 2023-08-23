const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://waqastariq274:waqas0805@cluster0.aprnj2o.mongodb.net/foodhub";

const connectToMongo = async () => {
  const db = await mongoose.connect(mongoURI);
  console.log(db.connection.readyState);
};

module.exports = connectToMongo;
