import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstApp from './components/first-app-component/FirstApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const numero = 400;
root.render(
  <React.StrictMode>
    <FirstApp title="My first app desde el index" sum={numero}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
