import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
const Main = (props) => {
  const Navigate = useNavigate();
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const parms = useParams();
  console.log(parms);
  //랜덤 평점 만들기
  //랜덤 정수 뽑아보기
  //   const random_number = Math.floor(Math.random() * 5 + 1);
  //   console.log(random_number);
  //요일과 랜덤 정수 합친 dict 하나 만들기!_map으로! random_number를 days 요소 수 만큼 뽑기 위해
  //또 두번째는 밑에서 map 돌릴 때 요일이랑 정수 각각 빼기 위해
  const days_dict = days.map((d) => {
    return {
      day: d,
      random: Math.floor(Math.random() * 5 + 1),
    };
  });
  console.log(days_dict);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>내 일주일은?</h2>
      {days_dict.map((n, i) => {
        return (
          <Wrap key={i}>
            <Day>{n.day}</Day>
            {Array.from({ length: 5 }, (v, i) => {
              return (
                <Circle
                  key={i}
                  style={{ backgroundColor: n.random < i ? "#eee" : "yellow" }}
                />
              );
            })}
            <Triangle
              onClick={() => {
                Navigate(`/rating/${n.day}`);
              }}
            />
          </Wrap>
        );
      })}
    </>
  );
};

export default Main;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Day = styled.p`
    margin: 0px 0.5rem 0px 0px;
    font-weight: bold;
}
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: #eee;
`;

const Triangle = styled.div`
    appearance: none;
    background-color: transparent;
    border-color: transparent tan;
    width: 0px;
    height: 0px;
    border-top-width: 1rem;
    border-top-style: solid;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-left-width: 1.6rem;
    border-left-style: solid;
    cursor: pointer;
}
`;
