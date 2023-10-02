import React,{useState,useEffect} from 'react';

function UseEffectt2(props) {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState('');
    
    useEffect(() => {
      console.log(' >>>> using Effect ')
      document.title = count
    })

    return (
            <div className='mlml'>
                <b><u> Use effect </u></b><br/><br/>
                <p>The current <b> {text || 'count'} </b> is {count} </p>
                <button onClick={() => setCount(count + 1)}> Click me </button> &nbsp;&nbsp;&nbsp;&nbsp;
                <input value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
         );
}
export default UseEffectt2;