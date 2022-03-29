import axios from "axios";

export function storeExpense(expenceData) {
  axios.post(
    'hhttps://expense-tracker-6b8ca-default-rtdb.firebaseio.com/expenses.json',
    expenceData
  );
}