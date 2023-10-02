import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import ExpenseDashboard from './components/ExpenseDashboard';
import ExpenseList from './components/ExpenseList';
import ExpenseListFilters from './components/ExpenseListFilters';
import UseStattee from './playground/UseStattee';
import UseEffectt2 from './playground/UseEffectt2';

//import ClickIncrease from './playground/Hoc/ClickIncrease';
//import HoverIncrease from './playground/Hoc/HoverIncrease';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import AddExpensePage from './components/AddExpense';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import NotFound from './components/NotFound';
import UseReducerrr from './playground/UseReducerrr';
import PropsEx from './playground/PropsEx';

import SetStateee from './playground/SetStateee';
import UseEffectt from './playground/UseEffectt';
import CustomHook from './playground/CustomHook';
import UseContext from './playground/useContext';
import MyContextApp from './playground/useContext2';
import MemoEx from './playground/MemoEx';
import UseRef3 from './playground/UseRef3';
import UseCallback1 from './playground/UseCallback1';
import UseMemoEx2 from './playground/UseMemoEx2';
// const store = configureStore();

//import HocApp from './playground/Hoc';
//import JSReduxApp from './playground/JSReduxApp';
//import ExpensiveRedux from './playground/ExpensiveRedux';

// <App />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
                  <UseMemoEx2 />
                  {/* <UseCallback1 /> */}
                  {/* <UseRef3 /> */}
                  {/* <MemoEx /> */}
                  {/* <MyContextApp /> */}
                  {/* <UseContext /> */}
                  {/* <CustomHook /> */}                  
                  {/* <UseReducerrr />  */}                  
                  {/* <UseEffectt2 count={5}/> */}
                  {/* <UseStattee /> */}
                  {/* <UseEffectt /> */}
                  {/* <PropsEx /> */}
                  {/* <ClickIncrease secretWord={"pineapple"}/> */}
                  {/* <HoverIncrease /> */}
                  {/* <Routes>
                    <Route path = "/" element = {<ExpenseDashboard /> } exact={true} /> 
                      <Route path = "home" element = {<ExpenseDashboard /> } /> 
                      <Route path = "add" element = {<AddExpensePage />} />
                       <Route path="*" element = {<NotFound />} />
                  </Routes>   */}
        </Router>
  </React.StrictMode>
);

{  /* <ExpenseListFilters /> <ExpenseList />    */}