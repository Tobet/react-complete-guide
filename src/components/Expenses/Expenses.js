import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseResetHandler = (expenseId) => {
    props.onResetExpense(expenseId);
  };

  return (
    <div>
      <Card className="expenses">
        {/* two way binding to child component */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterSelectionHandler}
        />
        <ExpenseItem
          id={props.items[0].id}
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          onResetExpense={expenseResetHandler}
        ></ExpenseItem>
        <ExpenseItem
          id={props.items[1].id}
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          onResetExpense={expenseResetHandler}
        ></ExpenseItem>
        <ExpenseItem
          id={props.items[2].id}
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          onResetExpense={expenseResetHandler}
        ></ExpenseItem>
        <ExpenseItem
          id={props.items[3].id}
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          onResetExpense={expenseResetHandler}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
