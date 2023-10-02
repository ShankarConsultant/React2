import React,{useState} from 'react';

function SetStateee() {    
    const [message, setMessage] = useState('');
    
    // onChange = {e => setMessage()}
    return (
        <div className='mlml'>
            <input
                type = "text"
                value = {message}
                placeholder = "Enter a message"
                onChange = {e => setMessage(e.target.value) }
            />
            <p> <strong>{message}</strong> </p>
     </div>
    )
}

export default SetStateee;