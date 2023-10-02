import React,{useState} from 'react';
import withCounter from './withCounter.js';
function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);
    const { counter, incrementCounter } = props; 

    return (
      <div className='mlml'>     
        <div className= "borderRect">{props.name}</div>     
        <button onMouseOver={() => setFontSize((size) => size + 1)}> Increase on hover </button>
        <p style={{ fontSize }}> Size of font in onMouseOver function: {fontSize} </p>

        <br/>
        <button onClick={() => incrementCounter()}>Increment counter</button> 
        <p> Counter Value : <b>{counter}</b></p>
      </div>
    );
  }
//export default HoverIncrease;
export default withCounter(HoverIncrease,200);