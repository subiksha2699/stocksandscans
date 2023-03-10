import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
// import { legacy_createStore } from "redux";
// import setAllStocks from './reducers/reducer';

// import { Provider } from 'react-redux';

// const store = legacy_createStore(setAllStocks);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <App />
  </React.StrictMode>
)
