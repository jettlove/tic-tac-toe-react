import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import App from './TicTacToeApp';

export const app = {
    cssRetries: 0,
    fetchRetries: 0,
  
    run() {
      this.render(App);
    },
    render(Component) {
      const root = document.getElementById('react');
  
      /* istanbul ignore next */
      if (root) {
        ReactDOM.render(
          <>
            <Component />
            <GlobalStyles />
          </>,
          root,
        );
      }
    },
  };
  
  app.run();
