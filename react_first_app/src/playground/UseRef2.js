import React,{ useState, useEffect, useRef} from 'react';

const UseRef2 = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
export default UseRef2;