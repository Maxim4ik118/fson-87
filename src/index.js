import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { DetailsContextProvider } from 'context/DetaisContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DetailsContextProvider>
    <App />
  </DetailsContextProvider>
);
