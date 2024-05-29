import React from 'react'
import styled from 'styled-components';


const MonthForm = () => {

    const months =
    ['1월', '2월', '3월', '4월', '5월', '6월',
      '7월', '8월', '9월', '10월', '11월', '12월'];

  return (

    <>
    <MonthContainer>
        <MonthFormSt>
          <div className='MonthForm'>
            {months.map((month, index) => (
              <MonthButton key={index}>{month}</MonthButton>
            ))}
          </div>
        </MonthFormSt>
      </MonthContainer>
</>
    
  )
}

const MonthContainer = styled.div`
    display: flex;
    justify-content: center;
    `
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
`
const MonthButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #F0F0F0;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px rgba(1, 0, 0, 0.2);
  }
  transition: box-shadow 0.3s;
`;

export default MonthForm

