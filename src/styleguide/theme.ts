import { Theme } from 'styled-system';
import { colors } from './colors';

export const space: string[] = ['0', '2px', '4px', '8px', '16px', '32px', '64px'];

export const breakpoints: string[] = ['319px', '424px', '767px', '1023px'];

export const defaultTheme: Theme = {
  space,
  breakpoints,
  colors: {
    ...colors,
  },
};
