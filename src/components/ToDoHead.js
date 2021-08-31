import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Head = styled.div`
  padding: 48px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 35px;
  }
`;

const Day = styled.div`
  margin-top: 5px;
  color: #868e96;
  font-size: 25px;
`;

const BeLeftTasks = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

const useToday = () => {
  const [today, setToday] = useState({
    month: null,
    day: null,
    year: null,
    index: null,
    days: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
  });

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const index = date.getDay();

    setToday({
      ...today,
      month,
      day,
      year,
      index,
    });
  }, []);

  return today;
};

const ToDoHead = () => {
  const { year, month, day, days, index } = useToday();
  console.log(days);
  return (
    <Head>
      <h1>{`${year}년 ${month}월 ${day}일`}</h1>
      <Day>{days[index]}</Day>
      <BeLeftTasks>2개남음</BeLeftTasks>
    </Head>
  );
};

export default ToDoHead;
