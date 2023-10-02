import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router";
import {addExpense} from '../actions/expenses';
import configureStore from '../store/configureStore';
import { connect } from 'react-redux';

import ExpenseList from './ExpenseList';
import selectExpense from '../selectors/expenses';

import AddExpenseForm from './AddExpenseForm';

import { Provider } from 'react-redux';


const store = configureStore(); 
//store.dispatch(addExpense({description: 'descccccc', amount: 555, createdAt : 1693104220035}));

// const rightFn = (value)  => {
//     console.log('=======>'+value)
// }
function AddExpensePage () {   //const [description, setDescription,note, setNote] = useState(null);   // const [] = useState('');
    // {e => { setData(e.target.value); console.log(data.description) }
    //const [data, setData] = useState(initialvalues);      //let [err, setErr] = useState('');   // let [err, setErr] = useState('');    //let [datePick, setDatePick] = useState(moment());
   
    const navigate = useNavigate();

    return (
        <Provider store = {store}>
            <AddExpenseForm leftFn ={(value)=>  { 
              
                store.dispatch(addExpense({description: 'New Bill', amount: 400, createdAt : 1692294220035}));       
                navigate('/home');

            }}
                />
        </Provider>
    );
}



/*


 onSubmitt = {(expense) => {
                    console.log('==========')
                    console.log(expense)
                    console.log('==========')
                    //props.dispatch();
            }
   }
*/

//export default AddExpensePage;

export default AddExpensePage;
//export default connect(mapStateToProps)(AddExpensePage)
