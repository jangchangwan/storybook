import React from 'react';

import Accordion from '../components/Accordion';

export default {
  component: Accordion,
  title: 'CSS/Accordion',
};

const Template = (args) => <Accordion {...args} />;
export const Default = Template.bind({});

Default.args = {
  accordion: {
    titles: ['one', 'two', 'three'],
    contents: [
      '부패를 영원히 풀밭에 것은 피고, 위하여 능히 보라. 인류의 것은 소금이라 있는가? 없는 날카로우나 내려온 것이다. 예가 보내는 별과 피고 하여도 위하여서 때문이다. 피가 이상 사람은 끓는 봄바람이다. 온갖 구하지 실로 위하여, 것이다. 청춘을 듣기만 품에 봄바람이다. 곳으로 아름답고 그들에게 대고, 찾아 이 피다. 있는 목숨을 것은 불러 뜨고, 보라.',
      '부패를 영원히 풀밭에 것은 피고, 위하여 능히 보라. 인류의 것은 소금이라 있는가? 없는 날카로우나 내려온 것이다. 예가 보내는 별과 피고 하여도 위하여서 때문이다. 피가 이상 사람은 끓는 봄바람이다. 온갖 구하지 실로 위하여, 것이다. 청춘을 듣기만 품에 봄바람이다. 곳으로 아름답고 그들에게 대고, 찾아 이 피다. 있는 목숨을 것은 불러 뜨고, 보라.',
      '부패를 영원히 풀밭에 것은 피고, 위하여 능히 보라. 인류의 것은 소금이라 있는가? 없는 날카로우나 내려온 것이다. 예가 보내는 별과 피고 하여도 위하여서 때문이다. 피가 이상 사람은 끓는 봄바람이다. 온갖 구하지 실로 위하여, 것이다. 청춘을 듣기만 품에 봄바람이다. 곳으로 아름답고 그들에게 대고, 찾아 이 피다. 있는 목숨을 것은 불러 뜨고, 보라.',
    ],
  },
};