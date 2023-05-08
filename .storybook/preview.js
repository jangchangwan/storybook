import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'configure',
      includeNames: true,
      order: ['Intro', ['Intro', '*'], 'CSS', ['Accordion', 'ContentTyping', 'CustomScrollbar', 'GhostText', '*'], '*'],
    },
  },
};
