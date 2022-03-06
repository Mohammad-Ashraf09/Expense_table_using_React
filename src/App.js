import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

let dummy_expenses = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: 500,
        date: new Date(2021, 5, 12)
    },
];

const App = () =>
{
    const [expenses, setExpenses] = useState(dummy_expenses);  // useState returns an array which contain two elements one array and other is a function.
                                                               // And we destructured that returned array. expenses as variable and setExpenses as function which is used for change the title

    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;