import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../contexts/ExpenseContext";

const DateInput = ({ value, onChange }) => (
  <div>
    <StyledP>날짜</StyledP>
    <input type="date" value={value} onChange={onChange} />
  </div>
);
const ItemInput = ({ value, onChange }) => (
  <div>
    <StyledP>항목</StyledP>
    <input type="text" value={value} onChange={onChange} />
  </div>
);
const DescriptInput = ({ value, onChange }) => (
  <div>
    <StyledP>금액</StyledP>
    <input type="text" value={value} onChange={onChange} />
  </div>
);
const AmountInput = ({ value, onChange }) => (
  <div>
    <StyledP>내용</StyledP>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

const CommitButton = ({ onClick }) => (
  <button onClick={onClick} style={{ width: "50px" }}>
    등록
  </button>
);

const InputForm = () => {
  const { handleCommit } = useContext(ExpenseContext);

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [descript, setDescript] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date || !item || !descript || !amount) {
      alert("내용을 모두 기입해주세요");
      return;
    }
    handleCommit(date, item, descript, amount);
    setDate("");
    setItem("");
    setDescript("");
    setAmount("");
  };

  return (
    <>
      <AppContainer>
        <HeaderStyle>
          <form onSubmit={onSubmit} style={{ display: "flex", gap: "10px" }}>
            <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
            <ItemInput value={item} onChange={(e) => setItem(e.target.value)} />
            <DescriptInput
              value={descript}
              onChange={(e) => setDescript(e.target.value)}
            />
            <AmountInput
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <CommitButton />
          </form>
        </HeaderStyle>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  margin: 10px;
  background-color: white;
  gap: 10px;
  padding: 20px;
  flex-direction: row;
  border-radius: 8px;
`;
const StyledP = styled.p`
  margin: 0;
  font-weight: bold;
  color: #333;
`;

export default InputForm;
