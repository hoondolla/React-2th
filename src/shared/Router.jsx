import React, { useEffect, useState } from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ExpenseDetail from "../pages/ExpenseDetail";
import { v4 as uuidv4 } from "uuid";
import GlobalStyle from "../style/GlobalStyle";
// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
export const Router = () => {
  const initialData = localStorage.getItem("expenseData")
    ? JSON.parse(localStorage.getItem("expenseData"))
    : [];
  const [expense, setExpense] = useState(initialData);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Home expense={expense} setExpense={setExpense} />}
        ></Route>
        <Route
          path="/:id"
          element={<ExpenseDetail expense={expense} setExpense={setExpense} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
