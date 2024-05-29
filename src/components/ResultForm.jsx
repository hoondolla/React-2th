import React from "react";
import styled from "styled-components";
import ResultItem from "./ResultItem";

const ResultForm = ({ expense, removeExpense }) => {
  return (
    <>
      <ReadContainer>
        <ReadFormSt>
          {expense.map((exe) => {
            return (
              <ResultItem
                removeExpense={removeExpense}
                key={exe.id}
                exe={exe}
              />
            );
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
