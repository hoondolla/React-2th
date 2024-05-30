import React, { useContext } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../contexts/ExpenseContext";

const MonthForm = () => {
  const { month, setMonth } = useContext(ExpenseContext);
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  return (
    <>
      <MonthContainer>
        <MonthFormSt>
          <div className="MonthForm">
            {months.map((el) => {
              return (
                <MonthButton
                  seleceted={el === month}
                  key={el}
                  onClick={() => {
                    setMonth(el);
                  }}
                >{`${el}월`}</MonthButton>
              );
            })}
          </div>
        </MonthFormSt>
      </MonthContainer>
    </>
  );
};

const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MonthFormSt = styled.div`
  width: 740px;
  height: 150px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  border-radius: 8px;
`;
const MonthButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px rgba(1, 0, 0, 0.2);
  }
  transition: box-shadow 0.3s;
  box-shadow: ${(props) =>
    props.seleceted ? "5px 5px 10px rgba(1, 0, 0, 0.2)" : "none"};
`;

export default MonthForm;
