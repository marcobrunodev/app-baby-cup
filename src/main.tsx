import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './GlobalStyles/index.tsx'
import App from './App.tsx'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />

    <App />
  </React.StrictMode>,
)
