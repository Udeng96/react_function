import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import todoReducer from './reducer/Todo';
import { Provider } from 'react-redux';

//createStore을 통해 todoReducer에서 반환된 값을 받아준다.
//Provider를 사용하여 하위 컴포넌트들도 store에 접근 가능하다.
const store = createStore(todoReducer);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
