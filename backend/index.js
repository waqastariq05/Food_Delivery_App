const connectToMongo = require("./config/db");
const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;

connectToMongo();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, auth-token, Accept"
  );
  next();
});


// Allow DELETE requests from the specific frontend origin
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }))
app.use(express.static('upload'));

// Available Routes
app.use(express.json());
app.use("/api/admin", require("./routes/admin.js"));
app.use("/api/category", require("./routes/category.js"));
app.use("/api/item", require("./routes/item.js"));
app.use("/api/deal", require("./routes/deal.js"));
app.use("/api/contact", require("./routes/contact.js"));
app.use("/api/reservation", require("./routes/reservation.js"));
app.use("/api/order", require("./routes/order.js"));

app.listen(port, () => {
  console.log(`Foodhub app listening on port ${port}`);
});
