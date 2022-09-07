import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStoreHook} from 'react-redux';
import {Provider} from 'react-redux';
import userReducer from "../src/store/reducer/mainreducer"

const userStore= createStoreHook(userReducer,{user:[]});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={userStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider> 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
