import React, {useState, useMemo} from 'react';

const UseMemoEx2 = () => {
    console.log('render');
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //const calculation = expensiveCal(count);
    const calculation = useMemo(() => expensiveCal(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t)=>[...t,"New Todooo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>  <br/><br/>
            </div>

            <hr/><br/><br/>
            <div>
                Count : {count}  &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={increment}>+</button><br/>
                <h2>Expensive Calculation</h2>  {calculation}

            </div>
        </div>
    )
};

const expensiveCal = (num) => {
    console.log('calculating...');
    for(let i = 0; i < 1000000; i++) {
        num +=1;
    }
    return num;
}

export default UseMemoEx2;