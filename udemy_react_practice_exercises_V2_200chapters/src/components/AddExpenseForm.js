import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {addExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import selectExpense from '../selectors/expenses';

import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();     //console.log(now.format('MMM Do, YYYY'))   //let description = '';
const onDescriptionChange = (e) => {    const desc = e.target.value;    }
const store = configureStore();

function AddExpenseForm ({leftFn}) {  
    
const initialvalues = {
    description: "",
    amount:"",
    note: "",
    createdAt:1693104220035//moment()
};
const [data, setData] = useState(initialvalues);

const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
};

const onAmountChange = (e) => {
    const amountVal = e.target.value    
    if(amountVal.match(/^\d*(\.\d{0,2})?$/)){   // setAmt(() => (amountVal))
       setData({ ...data, [e.target.name]: e.target.value });
    }       
};

const onDateChange = (createdAt) => {       /*setDatePick(() => ({createdAt}))*/  }
const onFocusChangeFn = ({ focused }) => {  /*setDatePick(() => ({focused}))    setDateee({calendarFocused:focused})  */ }
 const onSubmit = (e) => {        console.log(e)
    e.preventDefault();
    if(!data.description || !data.amount){           // setData(()=>({expError: 'Please provide description and amount' }));    // setErr(() => ('Please provide description and amount'))
       console.log(' Invalid Data. Error in inserting record');      
    } else {        //setErr(() => (''))
        console.log('Submitted Successfully');     // store.dispatch(addExpense({description: 'New Bill', amount: 400, createdAt : 1692294220035}));     
       // console.log(this.props);
    //    this.props.onSubmitt({
    //         description:data.description,
    //         amount:data.amount,
    //         createdAt : '1693104220035'
    //     })
    leftFn({description:data.description, amount:data.amount, createdAt : moment()})

 }


//store.dispatch(addExpense({description: data.description, amount: data.amount, createdAt : 1693104220035}));
}

// onSubmitt({
//     description:data.description,
//     amount:data.amount,
//     createdAt : '1693104220035'
// })
    return (
            <div className='mlml'>
                    <div className="topnav">             
                        <Link to="/home" >Dashboard</Link>
                        <Link to="" className="active" >Add Expense</Link>
                    </div><br/><br/><br/>        
                    <fieldset style = {{marginRight:'100px'}}>
                    
                    {/* <button onClick={() => leftFn('test string')}>Click Here</button> */}
                        <br/><br/>
                    <legend style = {{backgroundColor: '#000', color: '#fff', padding: '3px 6px'}}>Add Expense </legend>        
                    <form onSubmit={onSubmit}>
                        <div style={{color:'red'}}>{/*err*/}</div>
                        <input
                            type = "text"
                            name = "description"
                            placeholder = 'Description'
                            value = {data.description}
                            onChange = {handleChange} 
                            autoFocus /> <br/><br/>
                        <input 
                            type = "number" 
                            name = "amount" 
                            placeholder = 'Amount'
                            value = {data.amount}     
                            onChange = {onAmountChange}           
                            /> <br/><br/>               
                        <SingleDatePicker
                            date = {moment()}
                            onDateChange = {onDateChange}                  
                            onFocusChange={onFocusChangeFn}
                            id="datePick"
                        />
                        <br/><br/>
                        <textarea 
                            placeholder = 'Add a note !!! (optional)'
                            name = "note"
                            value = {data.note}
                            onChange = {handleChange}  style={{height:'70px', width: '300px'}}
                            ></textarea><br/><br/>
                        <button>Add Expense</button>
                    </form>
                </fieldset>
            </div>
  );
}

// const mapStateToProps = (state) => {         //return { expenses : state.expenses, filters: state.filters}
//      //console.log(state)
//      return {
//          expenses : selectExpense(state.expenses, state.filters)
//      }
//  };

// const connectedAddExpenseList = connect(mapStateToProps)(AddExpenseForm);
// export default connectedAddExpenseList;
export default AddExpenseForm;