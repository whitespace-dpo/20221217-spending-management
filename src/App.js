import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
const DUMMY_EXPENSES = [
  {
    id: "1e",
    title: "Car Insurance",
    amount: 205.46,
    date: new Date(2021, 2, 28),
  },
  {
    id: "2e",
    title: "House Insurance",
    amount: 105.46,
    date: new Date(2022, 1, 21),
  },
  {
    id: "3e",
    title: "Phone Insurance",
    amount: 85.46,
    date: new Date(2021, 7, 20),
  },
  {
    id: "4e",
    title: "Study Insurance",
    amount: 205.46,
    date: new Date(2020, 3, 8),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [newYear, setYear] = useState("2021");
  const addExpenseHandler = (expense) => {
    setExpenses((preExpense) => {
      return [expense, ...expenses];
    });
  };
  const selectYearHandler = (year) => {
    console.log("In App.js");
    setYear(year);
    console.log(year);
  };
  return (
    <div>
      <h2>WhiteSpace</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card>
        <ExpensesFilter onSelectYear={selectYearHandler} year={newYear} />
        <Expenses expenses={expenses} year={newYear} />
      </Card>
    </div>
  );
}

export default App;
