import React from 'react';
import { connect } from 'react-redux';
import selectExpense from './../selectors/expenses';
//import ExpenseListItem from './../components/ExpenseListItem';

/* 
{props.filters.text}  ======== {props.expenses.length}
<ExpenseListItem props={props} /> 


*/
const ExpenseList = (props)  => (    
    <div className='mlml'> 
        <table className='tbl-cls'><thead><tr><th>Category</th><th>Price</th><th>Added Date</th></tr></thead>
        <tbody>
            {props.expenses.map((expense) => {
                let dateVal = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(expense.createdAt);
                //return <ExpenseListItem key={expense.id} {...expense} />;
                return <tr key={expense.id}><td>{expense.description}</td><td>{expense.amount}</td><td>{dateVal}</td></tr>
            })}
        </tbody>
        </table>
    </div>    
);

const mapStateToProps = (state) => {     // console.log(state.filters)    //return { expenses : state.expenses, filters: state.filters}
    return {
        expenses : selectExpense(state.expenses, state.filters)
    }
};

const connectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default connectedExpenseList;