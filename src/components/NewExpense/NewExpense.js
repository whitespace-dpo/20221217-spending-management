
import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {
    const [flag, setFlag] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setFlag(false);
    }
    const onChangeFlag = () => {
        setFlag(true);
    }
    if (flag)
    return (
        <Card className='new-expense'>
            <ExpensesForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </Card>
    )
    return (
        <Card className='new-expense__button'> 
            <button onClick={onChangeFlag}>Add new Expense</button>
        </Card>
    )
}
export default NewExpense;