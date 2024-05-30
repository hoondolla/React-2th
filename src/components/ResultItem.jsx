import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ResultItem = ({ exe }) => {
  const { date, item, descript, amount, id } = exe; // 구조분해할당

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <div>
      <Read onClick={handleClick}>
        <ReadContent>
          <TextContainer>
            <p>{date}</p>
            <p>{item}</p>
          </TextContainer>
          <TextContainer>
            <p>{descript}</p>
          </TextContainer>
          <TextContainer>
            <p>{amount}</p>
          </TextContainer>
        </ReadContent>
      </Read>
    </div>
  );
};

export default ResultItem;

const ReadContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Read = styled.div`
  width: 700px;
  height: 80px;
  margin: 10px;
  background-color: #f4f4f4;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  margin: 10px;
`;
