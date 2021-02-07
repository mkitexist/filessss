// const mysql = require("mysql");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "mysql",
//   database: "moneymanagement",
// });
// module.exports = db;
const mongoose = require("mongoose");
let p = new Date();
const moneymanagerr = new mongoose.Schema({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,

    required: true,
  },
});

const money = mongoose.model("moneymanagerya", moneymanagerr);
module.exports = money;
