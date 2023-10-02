import React,{useState} from 'react';
import { ReactDOM } from 'react-dom';

///https://blog.logrocket.com/understanding-react-higher-order-components/#what-are-hocs
function HocApp() {
    const [count, setCount] = useState(0); //default value of this state will be 0.
    // return (
    //   <div style={{marginTop:'80px',marginLeft:'70px'}}>
    //     <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    //     <p>Clicked: {count}</p>
    //   </div>
    // );

    return (
        <div className='mlml'>
          <button onMouseOver={() => setCount((count) => count + 1)}>Increment</button>
          <p>Clicked: {count}</p>
        </div>
      );

      // const newComponent = higherFunction(WrappedComponent);

  }

export default HocApp;
//ReactDOM.render(<AdminInfo info='adddddmin' />, document.getElementById('app'));
