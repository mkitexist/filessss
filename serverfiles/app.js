const express = require("express");
// const check = require("express-validator");
const bodyparser = require("body-parser");
const cors = require("cors");
const Imserver = express();
const mongoose = require("mongoose");
require("dotenv").config();
// const money = require("./model/mongodbdtatbase");
Imserver.use(cors());
Imserver.use(express.json());
const expenseIncome = require("./router/moneymanager-router");

mongoose.connect(
  "mongodb+srv://myapp:myapp123@crud.woa2q.mongodb.net/moneymanagement?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
Imserver.use("/moneyManager", expenseIncome);

// Imserver.get("/hi", async (req, res) => {
//   const mony = new money({ income: 23, expense: 45, date: 2020 - 3 - 12 });
//   try {
//     await mony.save();
//     console.log("hi man");
//   } catch {
//     console.log("hi man");
//     console.log(err);
//   }
// });

// Imserver.use("/", (req, res) => {
//   const sqlnsert =
//     " INSERT INTO incometable (date,dailyincome)values ('2021-01-04','900');";
//   db.query(sqlnsert, (err, result) => {
//     res.send("<h1>hi man im in dinga house 3001</h1>");
//   });
// });
const PORT = process.env.PORT || 3005;
Imserver.listen(PORT, () => {
  console.log("im running in port 3005");
});
// Imserver.set("port", PORT);
