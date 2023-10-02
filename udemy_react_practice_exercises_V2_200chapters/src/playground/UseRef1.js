import React,{ useState, useEffect, useRef} from 'react';

const UseRef1 = () => {
    const [inputVal, setInputVal] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return  <>
                <input                    
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value) }
                />

                <h1>Render Count :{count.current}</h1>
            </>
}
export default UseRef1;