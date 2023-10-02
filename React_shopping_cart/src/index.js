import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Login from './Login';
import Cart from './Cart';

import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

/*

https://www.youtube.com/watch?v=zrs7u6bdbUw


56 minutes completed

*/

root.render(
    <React.StrictMode>
        <Provider store = {store}>
           <App />
        </Provider>
         
    </React.StrictMode>      
);
/*


 <App />
<Router>    
<Routes>
    <Route path = "/" element = {<Login /> } exact = {true} />
    <Route path = "dashboard" element = {<Cart />} />  
</Routes>      
</Router> 

root.render(
  <Provider store={store}>
    <React.StrictMode>
          <App />
    </React.StrictMode>      
  </Provider>
);*/