import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../assets/css/Calendar.css';
export default function Calendar() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    makeCalendar(date);
  }, [date]);

  const makeCalendar = (date) => {
    // 값 가져오기
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
    const firstDay = new Date(date.setDate(1)).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let content = '';

    // 앞에 빈 박스
    for (let i = 0; i < firstDay; i++) {
      content += '<div class="nullBox"></div>';
    }
    // 중간에 날짜 박스
    for (let i = 1; i <= lastDay; i++) {
      content += `<div class="dateBox">${i}</div>`;
    }
    // 마지막 빈 박스
    for (let i = limitDay; i < nextDay; i++) {
      content += '<div class="nullBox"></div>';
    }

    document.querySelector('#dateTitle').innerText = `${currentYear}년 ${currentMonth}월`;
    document.querySelector('#dateContent').innerHTML = content;
  };

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };
  const prevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };
  return (
    <Container>
      <Header>
        <Button onClick={prevMonth}>이전달</Button>
        <Title id="dateTitle"></Title>
        <Button onClick={nextMonth}>다음달</Button>
      </Header>
      <Content>
        <WeekBox>일</WeekBox>
        <WeekBox>월</WeekBox>
        <WeekBox>화</WeekBox>
        <WeekBox>수</WeekBox>
        <WeekBox>목</WeekBox>
        <WeekBox>금</WeekBox>
        <WeekBox>토</WeekBox>
      </Content>
      <Content id="dateContent"></Content>
    </Container>
  );
}

const Container = styled.div`
  max-width: 820px;
  padding: 0 1.4rem;
  margin-top: 1.4rem;
  color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h2``;

const Button = styled.button`
  cursor: pointer;
  background-color: #333333;
  border: none;
  color: #f2f2f2;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;

const WeekBox = styled.div`
  background: #e31b20;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 6px;
`;
