import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function ContentTyping({ content }) {
  return (
    <Container>
      <TypingAnimation data-text={content} textLength={content.length}>
        {content}
      </TypingAnimation>
    </Container>
  );
}

const Container = styled.div`
  color: #fff;
`;
const animation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const TypingAnimation = styled.h1`
  margin: 0;
  position: absolute;
  top: 40%;
  text-transform: uppercase;
  font-family: consolas;
  letter-spacing: 12px;
  color: transparent;
  white-space: nowrap;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    overflow: hidden;
    border-right: 1px solid white;
    animation: ${animation} 3s steps(${(props) => props.textLength}) infinite;
  }
`;
