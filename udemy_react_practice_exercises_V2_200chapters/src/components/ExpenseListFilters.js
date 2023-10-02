import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => ( 
    
    <div className='mlml'>
                <b><u>Expense List</u></b> 
                <br/>  <br/> 
        <input type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value)); //console.log(e.target.value)
            }
         } />
        
        <span style={{marginLeft:'100px'}}> 
            <select
                    value={props.filters.sortBy} 
                    onChange={(e) => {
                        if(e.target.value==='date'){
                            props.dispatch(sortByDate()); //console.log(e.target.value)
                        } else {
                            props.dispatch(sortByAmount());
                        }
                        
                    } }
                    >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </span>

    </div>)

const mapStoreToProps = (state) => {
    return {
        filters: state.filters
    };
};
   
export default connect(mapStoreToProps)(ExpenseListFilters);