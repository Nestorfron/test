import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from "./store/AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext> 
  </React.StrictMode>
);

reportWebVitals();
