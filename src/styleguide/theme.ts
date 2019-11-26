import { Theme } from 'styled-system';
import { colors } from './colors';
import { space } from './space';

export const breakpoints: string[] = ['319px', '424px', '767px', '1023px'];

export const defaultTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints,
  colors: {
    ...colors,
  },
};
