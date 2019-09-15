import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  #react {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Open Sans', 'Segoe UI', sans-serif;
    font-size: 1em;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0;
    position: relative;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1400px) {
      font-size: 0.9em;
    }
  }

  img {
    height: auto;
    max-width: 100%;
  }

  a {
    text-decoration: none;

    &.disabled {
      pointer-events: none;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default () => <GlobalStyle />;
