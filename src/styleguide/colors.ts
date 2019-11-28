import * as CSS from 'csstype';

export interface ThemeColors {
  primary: CSS.ColorProperty;
  link: CSS.ColorProperty;
  success: CSS.ColorProperty;
  warning: CSS.ColorProperty;
  error: CSS.ColorProperty;
  heading: CSS.ColorProperty;
  text: CSS.ColorProperty;
  disabled: CSS.ColorProperty;
  border: CSS.ColorProperty;
}

export const colors: ThemeColors = {
  primary: '#423EA2',
  link: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#e84118',
  heading: '#423EA2',
  text: '#000',
  disabled: '#f5222d',
  border: '#423EA2',
};
