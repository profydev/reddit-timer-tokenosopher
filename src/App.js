import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Bitter', 'Montserrat', serif;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <div>App Placeholder</div>
    </>
  );
}

export default App;
