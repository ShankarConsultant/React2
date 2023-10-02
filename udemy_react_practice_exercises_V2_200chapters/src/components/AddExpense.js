import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router";

import {addExpense} from '../actions/expenses';
import configureStore from '../store/configureStore';
import { connect, useDispatch } from 'react-redux';

import ExpenseList from './ExpenseList';
import selectExpense from '../selectors/expenses';

import AddExpenseForm from './AddExpenseForm';

import { Provider } from 'react-redux';

const store = configureStore(); 
//store.dispatch(addExpense({description: 'descccccc', amount: 555, createdAt : 1693104220035}));

// const rightFn = (value)  => {     console.log('=======>'+value) }
//const navigate = useNavigate();
 const AddExpensePage = ()  => (  //const [description, setDescription,note, setNote] = useState(null);   // const [] = useState('');
    // {e => { setData(e.target.value); console.log(data.description) }
    //const [data, setData] = useState(initialvalues);      //let [err, setErr] = useState('');   // let [err, setErr] = useState('');    //let [datePick, setDatePick] = useState(moment());
   
   // const dispatch = useDispatch();
    //return (        
                 //const navigate = useNavigate();
                <div>
                    <AddExpenseForm leftFn ={(objValue)=>  {       // debugger;
                            let sessionExpenseObj = JSON.parse(localStorage.getItem('expenseItems'));
                            if(sessionExpenseObj !== null){     //console.log(sessionExpenseObj)
                                if(!Array.isArray(sessionExpenseObj)){
                                    sessionExpenseObj = [sessionExpenseObj]; 
                                }
                                sessionExpenseObj.push(objValue);
                            } else {
                                sessionExpenseObj = objValue;
                            }
       
                            localStorage.setItem('expenseItems', JSON.stringify(sessionExpenseObj));
                            //console.log('===============');     console.log(objValue);     console.log('===============')                        
                            //store.dispatch(addExpense({description: objValue.description, amount: objValue.amount, createdAt : 1692294220035}));       
                            // dispatch(addExpense(objValue));                     
                            // navigate('/home');                            
                           // navigate('/home', { state: { id: 7, color: 'green' } });
                        }}
                    />
                    <Provider store = {store}>
                        {/* <ExpenseList />     */}
                    </Provider>
                </div>       
    );


/*
 onSubmitt = {(expense) => {
                    console.log('==========');    console.log(expense);   console.log('==========');  //props.dispatch();
            }
}
*/
//export default connect()(AddExpensePage)
export default AddExpensePage;
