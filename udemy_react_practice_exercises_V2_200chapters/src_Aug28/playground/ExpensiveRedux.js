import React from 'react';
import { createStore, combineReducers } from 'redux';
import {v1 as uuid} from 'uuid'

// Add Expense
const addExpense = ({description = '', note = '', amount = 0,createdAt = 0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: { id: uuid(), description, note, amount, createdAt}
});

// Remove Expense
const removeExpense = ({ id } = {} ) => ({  type: 'REMOVE_EXPENSE', id});

// Edit Expense
const editExpense = (id, updates) => ({  type: 'EDIT_EXPENSE', id, updates});

// SET_TEXT_FILTER
const setTextFilter = (text='') => ({ type:'SET_TEXT_FILTER', text})

// SORT_BY_DATE
const sortByDate = () => ({ type:'SORT_BY_DATE' })

// SORT_BY_AMOUNT
const sortByAmount = () => ({ type:'SORT_BY_AMOUNT' })

// SET_START_DATE
const setStartDate = (startDate) => ({ type:'SET_START_DATE', startDate  })

// SET_END_DATE
const setEndDate = (endDate) => ({    type:'SET_END_DATE',    endDate })

const defaultReducerState = []
const expenseReducers = (state = defaultReducerState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':                                                                 //return state.concat(action.expense)
            return [...state, action.expense];
        case 'REMOVE_EXPENSE': 
            return state.filter(({id}) => id !== action.id );
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id) return {...expense, ...action.updates}
                else return expense
            });
        default:
            return state;
    }
};

const defaultFilterReducerState = { text:'', sortBy:'date', startDate: undefined, endDate: undefined}
const filterReducers = (state = defaultFilterReducerState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':                                                              // return state.concat(action.expense)
            return {...state, text: action.text};
        case 'SORT_BY_DATE':                                                                 // return state.concat(action.expense)
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':                                                              // return state.concat(action.expense)
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;   // 10 >= 1
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;   // 10 <= 5
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {         return a.createdAt < b.createdAt ? 1 : -1; }
        else if(sortBy === 'amount'){   return a.amount < b.amount ? 1 : -1;            }
    })
};
const store = createStore(combineReducers({expenses: expenseReducers, filters: filterReducers}));

store.subscribe(() => {
    const state = store.getState(); console.log(store.getState())
    const visibleExpense = getVisibleExpense(state.expenses, state.filters)
    console.log(visibleExpense);
});



const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 22, createdAt : 110}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 35, createdAt : 20}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 666}))

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(1));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(20));






const user = {    name: 'jen',    age: 33   }
const user1 = {    age:45,    dept: 'Admin' }
//console.log({age:11, ...user, location:'delhi'})
//console.log({...user, ...user1})    // overwrites existing property and give updated object 

//console.log(expenseOne)
/*const demoState = {
    expenses: [{
        id:'121aaa',
        description:'January',
        note: 'This was final rent',
        amount: 5500,
        createdAr:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
}*/
function JSReduxApp (){
    return (<div>Expensive</div>)
}
export default JSReduxApp;