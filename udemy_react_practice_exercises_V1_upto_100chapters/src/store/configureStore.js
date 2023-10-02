import { createStore, combineReducers } from 'redux';
import {expenseReducers} from '../reducers/expenses';
import {filterReducers} from '../reducers/filters';

export default () => {
    const store = createStore(combineReducers({expenses: expenseReducers, filters: filterReducers}));
    return store;
}
