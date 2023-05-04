import React from 'react';

import CustomScrollbar from './CustomScrollbar';

export default {
  component: CustomScrollbar,
  title: 'CustomScrollbar',
};

const Template = (args) => <CustomScrollbar {...args} />;
export const Default = Template.bind({});

Default.args = {
  scrollWidth: '8px',
  scrollRadius: '10px',
  scrollColor: '#217af4',
  scrollBackgroundColor: '#E8F1FE',
};
