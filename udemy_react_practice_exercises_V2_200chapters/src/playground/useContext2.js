import React,{useState, createContext, useContext} from 'react';
const empInstance = createContext();

const MyContextApp = () => {
    const [user, setUser] = useState("Shankar Arunachalam");
    return   (
                <empInstance.Provider value={user}>               
                    <div className='mlml'>  <button style = {{ backgroundColor:'#db9ec3'}}>{user}</button> </div>  <Component1 />  
                </empInstance.Provider>
            );
};

const Component1 = () =>  <>  <br/><button style = {{ backgroundColor:'#559ec3'}}>Component1</button>   <Component2 />   </>  
const Component2 = () =>  <>  <br/><br/><button style = {{ backgroundColor:'#1c3'}}>Component2</button> <Component3 />   </>

const Component3 = () => {
    const user = useContext(empInstance);  console.log(user) //let userProp = user.props.value;
     return  <> 
                <br/><br/><button style = {{ backgroundColor:'#222ec3'}}> {user} </button>
            </>                
 }

export default MyContextApp;

/*  

*/