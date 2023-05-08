import React from 'react';
import styled from 'styled-components';
import Code from '../assets/icon/code-brackets.svg';
import Repo from '../assets/icon/repo.svg';
import Plugin from '../assets/icon/plugin.svg';
import Flow from '../assets/icon/flow.svg';

export default function Intro() {
  return (
    <Container>
      Storybook을 통해 연습삼아 구현해놓은 CSS 애니메이션을 보여준다.
      <Subheading>CODE</Subheading>
      <LinkList>
        <LinkItem href="https://github.com/jangchangwan/storybook" target="_blank">
          <Image src={Code} alt="code" />
          <Span>
            <Strong>GitHub</Strong>
            모든 프로젝트의 코드는 GitHub에서 형상관리 합니다.
          </Span>
        </LinkItem>
        <LinkItem href="https://github.com/jangchangwan/" target="_blank">
          <Image src={Repo} alt="repo" />
          <Span>
            <Strong>GitHub</Strong>
            모든 프로젝트와 코드, 그리고 여러 정보를 볼 수 있습니다.
          </Span>
        </LinkItem>
      </LinkList>
      <Subheading>Contact Me</Subheading>
      <LinkList>
        <LinkItem
          href="https://www.notion.so/changwan327/826b71078ea14b829ae4b12b2e3776fe?v=fb3081b6fb39469196ec7c0ab1f46cf4&pvs=4"
          target="_blank"
        >
          <Image src={Plugin} alt="plugin" />
          <Span>
            <Strong>Notion</Strong>
            모든 것들을 기억할 자신이 없어 기록합니다.
          </Span>
        </LinkItem>
        <LinkItem href="mailto:tktkd6755@gmail.com" target="_blank">
          <Image src={Flow} alt="flow" />
          <Span>
            <Strong>Email</Strong>
            이메일(tktkd6755@gmail.com)로 소통해도 좋습니다.
          </Span>
        </LinkItem>
      </LinkList>
      <TipWrapper>
        <Tip>Info</Tip>
        <CODE>Dark</CODE> 배경이 기본값입니다.
      </TipWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 5rem;
  background-color: #fff;
`;

const Subheading = styled.div`
  --mediumdark: '#999999';
  font-weight: 900;
  font-size: 13px;
  color: #999;
  letter-spacing: 6px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 12px;
  margin-top: 40px;
`;

const LinkList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  @media (min-width: 620px) {
    row-gap: 20px;
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media all and (-ms-high-contrast: none) {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    -ms-grid-rows: 0fr 0fr;
  }
`;

const LinkItem = styled.a`
  display: block;
  padding: 20px 30px 20px 15px;
  border: 1px solid #00000010;
  border-radius: 5px;
  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
  color: #333333;
  display: flex;
  align-items: flex-start;
  text-decoration: none;

  :hover {
    border-color: #1ea7fd50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }
  :active {
    border-color: #1ea7fd;
    transform: translate3d(0, 0, 0);
  }
`;

const Tip = styled.span`
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
`;

const TipWrapper = styled.div`
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const CODE = styled.code`
  font-size: 12px;
  display: inline-block;
`;

const Strong = styled.strong`
  font-weight: 700;
  display: block;
  margin-bottom: 2px;
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
  flex: none;
`;
const Span = styled.span`
  font-size: 14px;
  line-height: 20px;
`;
