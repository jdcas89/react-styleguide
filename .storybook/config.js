import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

addDecorator(story => (
  <ThemeProvider theme={{}}>
    <Router history={history}>{story()}</Router>
  </ThemeProvider>
));

configure(require.context('../src', true, /\.stories\.tsx$/), module);
