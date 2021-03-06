import React, {useState} from 'react';   // useState is Hook and all hooks starts from 'use'
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = props =>
{
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">&#8377;{props.amount}</div>   {/*&#8377; is rupees symbol*/}
            </div>
        </Card>
    );
}

export default ExpenseItem;