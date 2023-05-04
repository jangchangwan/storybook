import React from 'react';
import ContentTyping from '../components/ContentTyping';

export default {
  component: ContentTyping,
  title: 'CSS/ContentTyping',
};

const Template = (args) => <ContentTyping {...args} />;

export const Default = Template.bind({});

Default.args = {
  content: '타닥 타닥 단어 입력중',
};
