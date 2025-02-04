import React, { useEffect, useState } from "react";
import ResultForm from "../components/ResultForm";
import InputForm from "../components/InputForm";
import MonthForm from "../components/MonthForm";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const DivHt = styled.div`
  background-color: gray;
`;

const Home = ({ expense, setExpense }) => {
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

  console.log(filteredExpenses);

  return (
    <DivHt>
      <InputForm handleCommit={handleCommit} />
      <MonthForm month={month} setMonth={setMonth} />
      <ResultForm
        filteredExpenses={filteredExpenses}
        removeExpense={removeExpense}
        key={expense.id}
        expense={expense}
      />
    </DivHt>
  );
};

export default Home;
