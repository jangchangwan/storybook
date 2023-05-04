import React from 'react';

import GhostText from './GhostText';

export default {
  component: GhostText,
  title: 'GhostText',
};

const Template = (args) => <GhostText {...args} />;
export const Default = Template.bind({});

Default.args = {
  content: '안녕하세요, 반갑습니다.',
};
