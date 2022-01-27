import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Rating = (props) => {
  const navigate = useNavigate();
  const parms = useParams();
  const circle = React.useRef(null);
  console.log(parms);
  const [rate, setRate] = React.useState(0);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        <Title>{parms.day}요일</Title> 평점 남기기
      </h2>
      <Wrap>
        {Array.from({ length: 5 }, (v, i) => {
          return (
            <Circle
              key={i}
              onClick={() => {
                setRate(i + 1);
              }}
              style={{ backgroundColor: rate < i + 1 ? "#eee" : "yellow" }}
            />
          );
        })}
      </Wrap>

      <Button
        onClick={() => {
          return navigate("/");
        }}
      >
        평점 남기기
      </Button>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;
const Title = styled.span`
  background-color: thistle;
  color: #fff;
  border-radius: 5px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: #eee;
`;

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  background-color: tan;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 20px auto;
  cursor: pointer;
`;

export default Rating;
