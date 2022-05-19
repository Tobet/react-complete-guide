import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterSelectionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        {/* two way binding to child component */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterSelectionHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
