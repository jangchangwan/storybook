import React from 'react';
import styled from 'styled-components';

export default function GhostText({ content }) {
  return (
    <Container>
      <Text>
        {content
          .split('')
          .map((word, idx) => React.createElement(GhostEffects, { key: `ghost-${idx}`, index: idx }, word))}
      </Text>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem;
  color: #fff;
  font-size: 2rem;
`;

const GhostEffects = styled.span`
  transition: 1s;

  &:nth-child(${(props) => props.index + 1}) {
    transition-delay: ${(props) => props.index * 0.1}s;
  }
`;

const Text = styled.h2`
  text-transform: uppercase;
  color: white;
  display: flex;
  text-align: center;
  white-space: pre;

  &:hover {
    ${GhostEffects} {
      filter: blur(36px);
      opacity: 0;
      transform: scale(1.4);
    }
  }
`;
