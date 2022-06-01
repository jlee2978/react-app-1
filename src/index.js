import React from 'react';  // import object from module
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// old method (React 17)
// const element = <h1>Hello World</h1>;       // component to render
// ReactDom.render(element, document.getElementById('root'))      // redner(element you want to render, where to redner the element in the real DOM)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


