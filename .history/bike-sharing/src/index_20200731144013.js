import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import Life from './pages/demo/life';
import Admin from './admin';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.less';
import Home from './pages/route_demo/route1/Home'
/* <Admin /> */
ReactDOM.render(
  <React.StrictMode>
    
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
