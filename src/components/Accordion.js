import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

export function AccordionBox({ title, content }) {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (parentRef.current === null || childRef === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = 'white';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = 'lightgray';
      }
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? 'open' : 'close';

  return (
    <div>
      <ContentSection onClick={handleClick}>
        <Label>
          {title}
          <Button>{buttonText}</Button>
        </Label>
        <Contents ref={parentRef}>
          <P ref={childRef}>{content}</P>
        </Contents>
      </ContentSection>
    </div>
  );
}

export default function Accordion({ accordion: { id, titles, contents } }) {
  return (
    <AccordionContainer>
      <h1>Accordion</h1>
      <AccordionBox title={titles[0]} content={contents[0]} />
      <AccordionBox title={titles[1]} content={contents[1]} />
      <AccordionBox title={titles[2]} content={contents[2]} />
    </AccordionContainer>
  );
}
const AccordionContainer = styled.div`
  max-width: 600px;
`;

const Button = styled.div`
  top: 8px;
  right: 8px;
  font-size: 14px;
  position: absolute;
`;
const ContentSection = styled.div`
  position: relative;
  margin: 10px 20px;
  background: white;
`;

const Label = styled.div`
  position: relative;
  padding: 10px;
  background: cyan;
  font-weight: 600;
  cursor: pointer;
  &::before {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.5em;
  }
`;

const Contents = styled.div`
  position: relative;
  background: white;
  overflow-y: auto;
  transition: 0.5s;
  height: 0;
`;

const P = styled.p`
  padding: 0 8px;
`;
