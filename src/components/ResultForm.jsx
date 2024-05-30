import React, { useContext } from "react";
import styled from "styled-components";
import ResultItem from "./ResultItem";
import { ExpenseContext } from "../contexts/ExpenseContext";

const ResultForm = () => {
  const { filteredExpenses } = useContext(ExpenseContext);
  return (
    <>
      <ReadContainer>
        <ReadFormSt>
          {filteredExpenses.map((exe) => {
            return <ResultItem key={exe.id} exe={exe} />;
          })}
        </ReadFormSt>
      </ReadContainer>
    </>
  );
};

const ReadContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ReadFormSt = styled.div`
  width: 740px;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border-radius: 8px;
`;

export default ResultForm;
