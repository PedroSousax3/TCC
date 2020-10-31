import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie'

import Rotas from './router.js'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Rotas />
    </React.StrictMode>
  </CookiesProvider>,
  rootElement
);



