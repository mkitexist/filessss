// // const db = require("../model/mysqldtatbase");
const money = require("../model/mongodbdtatbase");

const postExpenseIncome = async (req, res) => {
  // const date = new Date();
  const income = req.body.income;
  const date = req.body.date;
  const expense = req.body.expense;
  //   // console.log("in income controller");
  //   // console.log(date);
  //   // console.log(income);
  //   // console.log(typeof expense);
  //   // const sqlnsert =
  //   //   " INSERT INTO moneymanager (income,expense,date)values (?,?,?)";
  //   // db.query(sqlnsert, [income, expense, date], (err, result) => {
  //   //   res.send("<h1>sucess</h1>");
  // });

  const mony = new money({ income: income, expense: expense, date: date });
  try {
    await mony.save();
    console.log("connected");
    res.send("<h1>sucess</h1>");
  } catch (err) {
    console.log(err);
  }
};
const getExpenseIncome = async (req, res) => {
  //   // console.log("in income controller");
  //   // const sqlnsert = " SELECT * from moneymanager";
  //   // db.query(sqlnsert, (err, result) => {
  //   //   res.json(result);
  //   // });
  money.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
// const putExpenseIncome = (req, res) => {
//   // console.log("in income controller");/
//   // const sqlnsert = " SELECT * from moneymanager";
//   // db.query(sqlnsert, (err, result) => {
//   //   res.json(result);
//   // });
// };

exports.postExpenseIncome = postExpenseIncome;
exports.getExpenseIncome = getExpenseIncome;
// exports.putExpenseIncome = putExpenseIncome;
