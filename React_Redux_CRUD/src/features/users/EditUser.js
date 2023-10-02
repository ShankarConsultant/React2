import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { userUpdated } from "./UsersSlice";

const EditUser = () => {
    const { pathname } = useLocation();
    const userId = pathname.replace("/edit-user/","");

    const user = useSelector((state) => state.users.find((user) => user.id === userId));
    
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [error, setError] = useState(null);
    
    const handleName  = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleClick = () => {
        if(name && email) {
            dispatch(userUpdated({ id:userId, name, email }));

            setError(null);
            navigate("/");
        } else {
            setError("Fill in all fields");
        }

        setName("");
        setEmail("");
    }

    return (
        <div className="container">
             <div className = "row"><br/><br/></div>
            <div className = "row">           
                <div className = "ten columns" ><h4>Edit User </h4></div>
                <div className = "two columns" 
                    style = {{background:'#ac2133', cursor:'pointer',margin:'3px 18px', textAlign:'center'}}>
                        <Link to = {"/"} style={{textDecoration:'none',color:'#fff'}}> Main Menu </Link> 
                </div>
            </div>
            <div style={{color:'red', marginLeft:'100'}}><b>{error}</b></div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="nameInput">Name</label>
                    <input  
                        className = "u-full-width"
                        type = "text"
                        placeholder = "test"
                        id = "nameInput"
                        onChange = {handleName}
                        value = {name}
                    />
                    <label htmlFor="emailInput">Email</label>
                    <input  
                        className = "u-full-width"
                        type = "email"
                        placeholder = "test@gmail.com"
                        id = "emailInput"
                        onChange = {handleEmail}
                        value = {email}
                    />
                    <button onClick={handleClick} className="button-primary">
                        Save User
                    </button>
                </div>
            </div>
        </div>
    )
    



     
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [error, setError] = useState(null);

    // const handleName = (e) => setName(e.target.value);
    // const handleEmail = (e) => setEmail(e.target.value);

    // const usersCnt = useSelector((state) => state.users.length);

    // const handleClick = () => {
    //     if(name && email){
    //         dispatch(userAdded({id: usersCnt + 1, name, email,}));
    //         setError(null);
    //         navigate("/");
    //     } else {
    //         setError("Fill in all fields");
    //     }
    //     setName("");
    //     setEmail("");
    // }
}

export default EditUser;

/*


<div style={{color:'red', marginLeft:100}}>  {error} </div>
<div className = "row">
    <div className = "three columns">
        <label>Name</label>
        <input 
            className = "u-full-width"
            type = "text"
            placeholder = "test"
            id = "nameInput"
            onChange = {handleName}
            value = {name}
        />
        <label>Email</label>
        <input 
            className = "u-full-width"
            type = "email"
            placeholder = "test@mailbox.com"
            id = "emailInput"
            onChange = {handleEmail}
            value = {email}
        />
        
        <button onClick = {handleClick} className = "button-primary">Add User</button>
    </div>
</div>

*/