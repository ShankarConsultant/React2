import React,{ useState} from 'react';
import MemoTodos from './MemoTodos';
const MemoEx = () => {
    const [count, setCount]= useState(10);
    const [todos, setTodos] = useState(["todo 1","todo 2"]);

    const increment = () => {
        setCount((c) => c + 1)
    }
    return (
        <>
            <MemoTodos todos = {todos} />
            <div>
            <br/><br/><br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Count : {count} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}
export default MemoEx;