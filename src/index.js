import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App.js';
import reportWebVitals from './reportWebVitals';
import Question from './components'
import Cards from './components';
import Post from './components'





ReactDOM.render(
  <React.StrictMode>
     <>
      <Apps />
      <Question />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
