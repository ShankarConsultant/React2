import React,{useState,useEffect} from 'react';
import { ReactDOM } from 'react-dom';

function UseEffectt() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        setTimeout(() => {
            console.log('You clicked on: ' + count);
          }, 3000);
      });

      function handleAlertClick() {
        setTimeout(() => {
          console.log('You clicked on: ' + count);
        }, 0);
      }

   // (() => console.log('bbbb'))();
    return (
            <div className='mlml'>
                <b><u> Use effect </u></b><br/><br/>

                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}> Click me </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <button onClick={handleAlertClick}>Show alert</button> */}

            </div>
         );
}
export default UseEffectt;