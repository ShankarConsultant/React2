import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import ExpenseDashboard from './components/ExpenseDashboard';
import ExpenseList from './components/ExpenseList';
import ExpenseListFilters from './components/ExpenseListFilters';

//import ClickIncrease from './playground/Hoc/ClickIncrease';
//import HoverIncrease from './playground/Hoc/HoverIncrease';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import AddExpensePage from './components/AddExpense';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import NotFound from './components/NotFound';

import PropsEx from './playground/PropsEx';

import SetStateee from './playground/SetStateee';
import UseEffectt from './playground/UseEffectt';

// const store = configureStore();



//import HocApp from './playground/Hoc';
//import JSReduxApp from './playground/JSReduxApp';
//import ExpensiveRedux from './playground/ExpensiveRedux';

// <App />
const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//     <React.StrictMode>
//         <Router>
//             <UseEffectt />
//         </Router>
//     </React.StrictMode>
//  );
root.render(
  <React.StrictMode>
        <Router>
          <Routes>
              <Route path = "/" element = {<ExpenseDashboard /> } exact={true} />
              <Route path = "home" element = {<ExpenseDashboard /> }  />
              <Route path = "add" element = {<AddExpensePage />} />
              <Route path="*" element = {<NotFound />} />
          </Routes>           
        </Router>
  </React.StrictMode>
);


{

  
  /*
           <PropsEx />

      

  */
  
  //<ExpenseDashboard />
  
  
  
  /* <ExpenseListFilters />
<ExpenseList />
<AddExpensePage /> */}

//  <ClickIncrease secretWord={"pineapple"}/>
//  <HoverIncrease />