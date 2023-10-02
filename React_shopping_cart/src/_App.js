import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store';

function App() {
  const counter = useSelector((state) => state.counter); 
  const dispatch = useDispatch();

  /*
        const increment = () =>   dispatch({type:'INC'})
        const decrement = () =>   dispatch({type:'DEC'})
        const addBy = () =>       dispatch({type:'ADD', payload: 10})
        const resetFn = () =>     dispatch({type:'RES'})
  */

  const increment = () =>   { dispatch(actions.increment()); }

  const decrement = () =>   { dispatch(actions.increment()); }

  const addBy = () =>       { dispatch(actions.addBy(15)); }

  // const resetFn = () =>     dispatch({type:'RES'})
  
  return (
    <div className='mlml'>
        <h4>Counter App </h4>  
        <h5>{counter}</h5>   
        <button onClick={increment}>Increment</button>  &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button>  &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={addBy}>Add Value</button> &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button onClick={resetFn}>Reset</button> */}
    </div>
  );
}

export default App;
