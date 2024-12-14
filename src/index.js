import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storeConfig from "./Store/StoreConfig"
import{Provider} from "react-redux"
import "./styles/styles.css"
import "./styles/promo.css"
import "./styles/form.css"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.css";

const store=storeConfig();
const root = ReactDOM.createRoot(document.getElementById('root'));
store.subscribe(()=>{
  const state=store.getState();
  console.log(state)
})
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
