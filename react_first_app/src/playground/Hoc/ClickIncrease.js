import React,{useState} from 'react';
import withCounter from './withCounter.js';
function ClickIncrease(props) {     // console.log(props);
    const [ fontSize, setFontSize ] = useState(10); //set initial value of Hook to 10.
    const { counter, incrementCounter } = props;     //const fontSize = 20;    //const color = 'red';

    console.log("Value of secretWord: " + props.secretWord);

    return (
      <div className='mlml'>   
        <div className= " ">{props.name}</div>     
        <button onClick={() => setFontSize((size) => size + 1)}> Increase with click </button>
        <p style = {{ fontSize }}> Size of font in onClick function : {fontSize}</p> <br/>
        <button onClick={() => incrementCounter()}>Increment counter</button> 
        <p> Counter Value : <b>{counter}</b></p>        
      </div>
    );
  }
  //export default ClickIncrease;
  export default withCounter(ClickIncrease,100);