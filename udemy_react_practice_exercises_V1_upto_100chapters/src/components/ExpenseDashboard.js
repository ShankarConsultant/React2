import React,{useState} from 'react';
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import ExpenseList from './ExpenseList';
import configureStore from './../store/configureStore';
import getVisibleExpenses from './../selectors/expenses';
import {setTextFilter} from './../actions/filters';
import {addExpense} from './../actions/expenses';
import { Provider } from 'react-redux';

const store = configureStore();
const state = store.getState();

store.dispatch(addExpense({description: 'Water Bill', amount: 222, createdAt : 1692264220035}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1345, createdAt : 1692064220035}));
store.dispatch(addExpense({description: 'Rent', amount: 700, createdAt : 1692964220035}));
store.dispatch(addExpense({description: 'EB charge', amount: 150, createdAt : 1693164220035}));
// store.dispatch(setTextFilter('water'));
// setTimeout(() => { store.dispatch(setTextFilter('rent')); },3000);
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)
// store.dispatch(addExpense({description: 'Maintainence', amount: 75, createdAt : 1693104220035}));
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const ExpenseDashboard = ()  => {
    return <div className='mlml'> 
                <div className="topnav">               
                    <Link to="/" className="active">Dashboard</Link>
                    <Link to="/add">Add Expense</Link>
                    {/* <a className="active" href="#home">Dashboard</a>   <a href="add">Add Expense</a>   */}                      
                </div>
                <Provider store = {store}>
                    <ExpenseList />       
                </Provider>
            </div>
}

export default ExpenseDashboard;