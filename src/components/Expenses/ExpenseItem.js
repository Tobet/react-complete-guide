import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// stateless | presentational | dumb component
const ExpenseItem = (props) => {

  const clickHandler = (event) => {
    props.onResetExpense(props.id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>Reset</button>
    </Card>
  );
};

export default ExpenseItem;
