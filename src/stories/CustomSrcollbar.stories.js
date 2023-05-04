import React from 'react';

import CustomScrollbar from '../components/CustomScrollbar';

export default {
  component: CustomScrollbar,
  title: 'CSS/CustomScrollbar',
};

const Template = (args) => <CustomScrollbar {...args} />;
export const Default = Template.bind({});

Default.args = {
  scrollWidth: '8px',
  scrollRadius: '10px',
  scrollColor: '#217af4',
  scrollBackgroundColor: '#E8F1FE',
};
