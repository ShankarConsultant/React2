import React,{useState} from 'react';

const UseContext = () => {
    const [user, setUser] = useState("Shankar Arunachalam");
    return <>
        <h1>This is test</h1>
        <h3>This is second content</h3>
        <Component1 user={user}/>
    </>
};

const Component1 = (userProps) => {
    return    <div>  <button style = {{ backgroundColor:'#db9ec3'}}>{userProps.user}</button><Component2 user={userProps.user}/>    </div>
}


const Component2 = (userProps) => {
   // console.log(userProps)
    return    <div>  
                <button style = {{ backgroundColor:'#559ec3'}}>{userProps.user}</button> 
                { <Component3 user={userProps.user}/>    }
              </div>
}

const Component3 = (userProps) => {
    return    <div>  <button style = {{ backgroundColor:'#aaaec3'}}>{userProps.user}</button></div>
}

export default UseContext;

/*  */