import React, { useEffect, useState, useContext } from "react";
import ResultForm from "../components/ResultForm";
import InputForm from "../components/InputForm";
import MonthForm from "../components/MonthForm";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const DivHt = styled.div`
  background-color: gray;
`;

const Home = () => {
  return (
    <DivHt>
      <InputForm />
      <MonthForm />
      <ResultForm />
    </DivHt>
  );
};

export default Home;
