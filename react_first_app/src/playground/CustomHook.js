import React,{useEffect, useState} from 'react';

const useMousePosition = () => {
    const [pos, setPos] = useState({x:0,y:0})

    useEffect(() => {
        console.log('mouse moved')
        document.addEventListener('mousemove', (e) => {
            setPos({x: e.pageX, y: e.pageY})
        })
    },[])
  
    return pos;
}
const customHook = () => {
    let mousePos = useMousePosition();

    return (
        <div>
            <br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <u>Mouse pointer Example</u>
            <br/><br/><br/><br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>{mousePos.x}, {mousePos.y}</b></div>
    )
}
export default customHook;