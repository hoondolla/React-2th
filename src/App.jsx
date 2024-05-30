import React, { useEffect, useState } from "react";
import { Router } from "./shared/Router";
import { ExpenseContext } from "./contexts/ExpenseContext";

const App = () => {
  const initialData = localStorage.getItem("expenseData")
    ? JSON.parse(localStorage.getItem("expenseData"))
    : [];

  const [expense, setExpense] = useState(initialData);

  const removeExpense = (id) => {
    setExpense(expense.filter((exe) => exe.id !== id));
  };

  const handleCommit = (date, item, descript, amount) => {
    const newExpense = {
      id: uuidv4(),
      date,
      item,
      descript,
      amount,
    };
    setExpense([...expense, newExpense]);
  };
  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expense));
  });

  const [month, setMonth] = useState(1);

  const filteredExpenses = expense.filter(
    (expenses) => expenses.date.split("-")[1] === month
  );

  return (
    <ExpenseContext.Provider
      value={{
        expense,
        setExpense,
        month,
        setMonth,
        handleCommit,
        removeExpense,
        filteredExpenses,
      }}
    >
      <Router />
    </ExpenseContext.Provider>
  );
};

export default App;
