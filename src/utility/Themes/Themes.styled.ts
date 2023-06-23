export interface Itheme {
  name: string;
  colors: {
    background: string;
    secondBackground: string;
    color: string;
    cardBackground: string;
  };
}

export const morning: Itheme = {
  name: 'morning',
  colors: {
    background:
      'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)',
    secondBackground: `#1C1A19`,
    color: 'rgba(255, 255, 255, 0.87)',
    cardBackground: '#4485D4',
  },
};
export const day: Itheme = {
  name: 'day',
  colors: {
    background: 'linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);',
    secondBackground: `#1C1A19`,
    color: 'rgba(255, 255, 255, 0.87)',
    cardBackground: 'rgba(68, 133, 212, 0.94);',
  },
};
export const dusk: Itheme = {
  name: 'dusk',
  colors: {
    background: 'linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)',
    secondBackground: `#1C1A19`,
    color: 'rgba(55, 55, 55, 0.87)',
    cardBackground: '#332F2E',
  },
};
export const night: Itheme = {
  name: 'night',
  colors: {
    background: 'linear-gradient(to bottom, #020111 85%,#191621 100%)',
    secondBackground: `#1C1A19`,
    color: 'rgba(255, 255, 255, 0.87)',
    cardBackground: '#332F2E',
  },
};
