import React,{ useState,useCallback} from 'react';
import CallBackTodos from './CallBackTodos'; 

const UseCallback1 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodos = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <CallBackTodos todos={todos} addTodo = {addTodos}/>
            <div className="mlml" style={{border:'2px solid #155117', width:'30%', margin: '2% 5%', padding: '2%'}}> Hi 
                Count : {count} <br/> <br/> 
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}
export default UseCallback1;