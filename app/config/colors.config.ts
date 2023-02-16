const colorConfig = {
  primary: '#bf3335',
  'gray.400': '#626262',
  yellow: '#fbc903',
};

export const getColor = (color: keyof typeof colorConfig) => colorConfig[color];
