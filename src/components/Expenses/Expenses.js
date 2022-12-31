import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const expenseFiltered = props.expenses.filter(
    (item) => item.date.getFullYear() == props.year
  );
  return (
    <div className="expenses">
      <ExpensesChart expenses={expenseFiltered} />
      <ExpensesList items={expenseFiltered} />
    </div>
  );
};
export default Expenses;
