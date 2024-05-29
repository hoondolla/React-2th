import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const ExpenseDetail = ({ expense, setExpense }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 전체 지출 내역 리스트 중 내가 선택한 리스트의 데이터만 찾아서 detailofdetail 변수에 넣어줌
  const detailofdetail = expense.find((item) => item.id === id);

  //초기값 설정
  const dateRef = useRef(detailofdetail.date);
  const itemRef = useRef(detailofdetail.item);
  const descriptRef = useRef(detailofdetail.descript);
  const amountRef = useRef(detailofdetail.amount);

  //뒤로가기
  const handleBack = () => {
    navigate("/");
  };

  //수정 버튼
  const modifyButton = (id) => {
    const modifiedData = {
      id: detailofdetail.id,
      date: dateRef.current.value,
      item: itemRef.current.value,
      descript: descriptRef.current.value,
      amount: amountRef.current.value,
    };

    // const updateData = expense.map((data) => {
    //   data.id === id ? { ...data, modifiedData } : data;
    // });

    setExpense((prevData) => {
      return prevData.map((data) => {
        //data.id => 전체 지출 내역
        return data.id === id ? { ...data, ...modifiedData } : data;
      });
    });

    navigate("/");
  };

  return (
    <DivHt>
      <DetailContainer>
        <DetailForm>
          <div>
            날짜
            <StyledInput
              ref={dateRef}
              defaultValue={detailofdetail.date}
              type="date"
              placeholder=""
            />
          </div>
          <div>
            항목
            <StyledInput
              ref={itemRef}
              defaultValue={detailofdetail.item}
              type="text"
              placeholder=""
            />
          </div>
          <div>
            금액
            <StyledInput
              ref={descriptRef}
              defaultValue={detailofdetail.descript}
              type="text"
              placeholder=""
            />
          </div>
          <div>
            내용
            <StyledInput
              ref={amountRef}
              defaultValue={detailofdetail.amount}
              type="text"
              placeholder=""
            />
          </div>
          <ButtonSt>
            <button onClick={() => modifyButton(id)}>수정</button>
            <button>삭제</button>
            <button onClick={handleBack}>뒤로가기</button>
          </ButtonSt>
        </DetailForm>
      </DetailContainer>
    </DivHt>
  );
};

const DivHt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: gray;
`;

const DetailContainer = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const DetailForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonSt = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export default ExpenseDetail;
