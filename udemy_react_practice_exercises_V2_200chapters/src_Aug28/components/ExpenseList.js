import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import selectExpense from './../selectors/expenses';
//import ExpenseListItem from './../components/ExpenseListItem';

/* 
{props.filters.text}  ======== {props.expenses.length}
<ExpenseListItem props={props} /> 

// */
// const ExpenseList = (props)  => (    
//     <div className='mlml'> 
//         <table className='tbl-cls'><thead><tr><th>Category</th><th>Price</th><th>Added Date</th></tr></thead>
//         <tbody>
//             {props.expenses.map((expense) => {
//                 let dateVal = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(expense.createdAt);
//                 //return <ExpenseListItem key={expense.id} {...expense} />;
//                 return <tr key={expense.id}><td>{expense.description}</td><td>{expense.amount}</td><td>{dateVal}</td></tr>
//             })}
//         </tbody>
//         </table>
//     </div>    
// );

// const mapStateToProps = (state) => {     // console.log(state.filters)    //return { expenses : state.expenses, filters: state.filters}
//     return {
//         expenses : selectExpense(state.expenses, state.filters)
//     }
// };

// const connectedExpenseList = connect(mapStateToProps)(ExpenseList);
// export default connectedExpenseList;

const expenseItems = JSON.parse(localStorage.getItem('expenseItems'));
let expenseActualItems = (expenseItems!==null) ? expenseItems : [];

const ExpenseList = () => {
    return (
            <div> 
                 <div className='mlml'> 
                    <table className='tbl-cls'><thead><tr><th>Category</th><th>Price</th><th>Added Date</th></tr></thead> 
                        <tbody>         
                        { expenseItems!==null &&  expenseItems.map(expense => (
                            
                            <tr key={expense.description}>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>   
                                <td>{expense.createdAt}</td>                                                         
                            </tr>
                            )
                        ) }

                        {  expenseItems==null  && <tr key='a123'> <td colspan='3' style={{color:'red',textAlign:'center',padding:50}}> <b>No records found!!!! </b></td> </tr> }
                        </tbody>
                    </table>
                </div>
            </div>

            );
}
export default ExpenseList;

/*

let expenseItems = {
    items:[
    { "id":"id1","description":"aaaaa","amount":"2345","createdAt":"1693104220035"},
    { "id":"id2","description":"bbbbb","amount":"8765","createdAt":"1693104220035"},
    { "id":"id3","description":"ccccc","amount":"9999","createdAt":"1693104220035"},
]};

let expenseActualItems = (expenseItems!==null) ? expenseItems.items : [];
{  expenseActualItems.map(expense => ( 
        <div key={expense.id}>
            <span>{expense.description}</span> &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{expense.amount}</span>
        </div> )
        ) }

*/