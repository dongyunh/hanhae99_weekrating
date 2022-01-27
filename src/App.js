import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Rating from "./Rating";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rating/:day" element={<Rating />} />
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;
export default App;
