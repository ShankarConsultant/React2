import { Action } from '@remix-run/router';
import React from 'react';
import { createStore } from 'redux';
//import {configureStore } from 'redux';

function JSReduxApp (){
    // const store = configureStore((state) = {count : 0}) => { return state });
    // const store = createStore((state = { cnt:0}, action) => {
    //     //debugger
    //     if(action.type == 'INCREMENT'){            
    //         return { cnt: state.count + 10 };
    //     } else {
    //         return state
    //     }    
    // });
    // let stateObj = store.getState();    console.log(stateObj);
    // let ObjArr = Object.values(stateObj);
    // store.dispatch({ type:'INCREMENT'});

    const CntReducer = (statte = {cnt:0}, action) =>  {        
        switch (action.type) {
          case 'INCREMENT': 
                const incrementVar = typeof action.incrementBy === 'number'? action.incrementBy : 1;
                return {cnt : parseInt(statte.cnt) + incrementVar }
          case 'DECREMENT':
                const decrementVar = typeof action.decrementBy === 'number'? action.decrementBy : 1;
                return {cnt : parseInt(statte.cnt) - decrementVar }
          case 'RESET':
                return {cnt : 0 }
          case 'SET':
                return {cnt : action.updateCnt }
          default:
            return statte.cnt
        }
    }
    const store = createStore(CntReducer,''); 
    let cntVal = {}; let cntRes = '';

    const subscribee =  store.subscribe(() => console.log(store.getState()))
    store.dispatch({  type: 'INCREMENT', incrementBy: 5 });
    //subscribee();
    store.dispatch({   type: 'INCREMENT' });    
     store.dispatch({  type: 'DECREMENT', decrementBy: 5  });
    store.dispatch({   type: 'RESET' });
    store.dispatch({   type:'SET', updateCnt: 145})
    console.log('============')
    // store.dispatch({  type: 'DECREMENT' });
    //cntVal = store.getState();    //let sessVal = JSON.parse(localStorage.getItem('counterVal'));

    return (
        <div style={{marginTop:'200px',marginLeft:'150px'}}>
            {/* <button onClick={addFn}>+1</button>
            <button onClick={subFn}>-1</button> <br/><br/><br/><br/> */}
             Count : <b>
                {/* {cntVal.cnt} */}
                </b>
        </div>
    );
}
export default JSReduxApp;

//  switch(action.type){
//      case 'INCREMENT': return { count : state.count + 1 }
//      case 'DECREMENT': return { count : state.count + 1 }
//      case 'RESET':   return { count : state.count + 1 }
//      default: return state
// }