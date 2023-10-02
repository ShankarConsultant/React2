import React from 'react';
import { connect } from 'react-redux'; 
import { removeExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => { 

    let dateVal = new Intl.DateTimeFormat('en-US', {
                                                    year: 'numeric', 
                                                    month: '2-digit',
                                                    day: '2-digit'
                                                }
                                        ).format(createdAt);
    return (<div> 
                <h3>{description}</h3> 
                <p>{amount} - <b>{dateVal}</b></p>
                <button onClick={() => {
                    dispatch(removeExpense({id}))
                }}>Remove</button>
            </div>) 
}

export default connect()(ExpenseListItem);