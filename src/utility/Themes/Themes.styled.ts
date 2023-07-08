import { lightTextColors } from './variables';

export interface Itheme {
  name: string;
  colors: {
    background: string;
    secondBackground: string;
    color: string;
    cardBackground: string;
  };
}


export const day: Itheme = {
  name: 'day',
  colors: {
    background: 'linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);',
    secondBackground: `#1C1A19`,
    color: lightTextColors.text1,
    cardBackground: 'rgba(68, 133, 212, 0.5);',
  },
};

export const night: Itheme = {
  name: 'night',
  colors: {
    background: 'linear-gradient(to bottom, #020111 85%,#191621 100%)',
    secondBackground: `#1C1A19`,
    color: lightTextColors.text1,
    cardBackground: '#332F2E',
  },
};
