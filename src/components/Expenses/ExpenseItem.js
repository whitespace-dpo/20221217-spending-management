import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (expense) => {
  const [title, setTitle] = useState(expense.title);
  const onChangeTitle = () => {
    console.log('clicked');
    setTitle('Updated!');
  }
  return (
    <div className="expense-item">
    <ExpenseDate date={expense.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    {/* <button onClick={onChangeTitle}>Change Title</button> */}
    </div>
  );
}
export default ExpenseItem;
