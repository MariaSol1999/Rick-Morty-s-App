import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Reduxx/store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> , document.getElementById('root')
  </Provider>
);