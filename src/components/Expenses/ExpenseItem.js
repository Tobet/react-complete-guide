import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// stateless | presentational | dumb component
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickChangeTitleHandler = (event) => {
    setTitle("Updated!");
    console.log(title);
  };

  const clickResetAmountButton = (event) => {
    props.onResetExpense(props.id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button" onClick={clickChangeTitleHandler}>Change title</button>
      <button type="button" onClick={clickResetAmountButton}>Reset amount</button>
    </Card>
  );
};

export default ExpenseItem;
