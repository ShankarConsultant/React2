import React, {memo} from 'react';

const CallBackTodos = ({todos, addTodo}) => {
    console.log('Use call back - Child render');
    return (
        <>
            <div style={{border:'2px solid #ed4567', width:'30%', margin: '2% 5%', padding: '2%'}}>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>             
        </>
    );
};
export default memo(CallBackTodos);