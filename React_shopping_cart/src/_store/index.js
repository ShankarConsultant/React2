import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState :{ counter: 0},
    reducers: {
        increment(state, action) {     state.counter++;                     },
        decrement(state, action) {     state.counter--;                     },
        addBy(state, action)     {     state.counter += action.payload;     },        
    }
})
export const actions = counterSlice.actions;
const store = configureStore({     reducer: counterSlice.reducer    });


    /*
    Method 1  (without createSlice):

    const reducerFn = (state={counter : 0 }, action) => {
    
            if(action.type === 'INC')      return { counter: state.counter + 1 };
            
            if(action.type === 'DEC')      return { counter: state.counter - 1 };

            if(action.type === 'ADD')      return { counter: state.counter + action.payload };

            if(action.type === 'RES')      return { counter: 0 };
    
    return state;
}

const store = configureStore({reducer:reducerFn});*/
export default store;