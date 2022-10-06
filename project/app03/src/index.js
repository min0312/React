import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Lmi from './Lmi';
import HeadFront from './HeadFront';
import MainMenu from './MainMenu';
import Footeer from './Footeer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lmi />
    <HeadFront />
    <MainMenu />
    <Footeer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
