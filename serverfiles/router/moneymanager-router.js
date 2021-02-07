const express = require("express");
// const { check } = require("express-validator");

const router = express.Router();
const incomeExpense = require("../controller/moneymanager-controller");
router.get("/getmoney", incomeExpense.getExpenseIncome);
router.post(
  "/postmoney",

  //   // [
  //   //   check("date").not().isEmpty().isLength({ min: 1 }),
  //   //   check("income").not().isEmpty().isLength({ min: 1 }),
  //   //   check("expense").not().isEmpty().isLength({ min: 1 }),
  //   // ],

  incomeExpense.postExpenseIncome
);
// router.put(
//   "/editmoney",
//   [
//     check("date").not().isEmpty(),
//     check("income").not().isEmpty(),
//     check("expense").not().isEmpty(),
//   ],

//   incomeExpense.putExpenseIncome
// );

module.exports = router;
