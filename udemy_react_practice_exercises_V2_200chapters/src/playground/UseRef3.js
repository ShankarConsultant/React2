import React,{ useState, useEffect, useRef} from 'react';

const UseRef3 = () => {
    const [inputVal, setInputVal] = useState("");
    const previousInputVal = useRef("");
    
    const inputElement = useRef();

    useEffect(() => {
        previousInputVal.current = inputVal
    },[inputVal]);

    return (
        <>
            <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)} />

            <h3>Current Value : {inputVal}</h3>
            <h3>Previous Value : {previousInputVal.current}</h3>
        </>
    )
}
export default UseRef3;