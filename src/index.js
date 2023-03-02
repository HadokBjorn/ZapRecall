import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyle from './components/App/ResetStyle';
import GlobalStyle from './components/App/GlobalStyle';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
