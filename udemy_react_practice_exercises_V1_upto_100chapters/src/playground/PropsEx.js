import React from 'react';
import PropsEx2 from './PropsEx2';
import PropsEx3 from './PropsEx3';

const logToConsole = (value) => {
    console.log(value)
}

const PropsEx = () => {  
    return (
        <div className='mlml'>
           { <PropsChild titleObj={{empId:'a123',empname:'eeeeee'}} /> } <br/> <hr/>    {/* Passing objects as props  */}
           <PropsEx2 title='this is test'/>                                             {/* Passing string as props  */}
           <PropsEx3 logThis={logToConsole} />                                          {/* Passing functions as props  */}
        </div>
    )
}

const PropsChild = ({titleObj}) => { 
    return (
            <div>
                <span>{titleObj.empId}</span> === <span>{titleObj.empname}</span> 
            </div>
        );
    
}

export default PropsEx;