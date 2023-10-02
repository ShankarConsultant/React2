//import { Link,useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';

function Login() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {    
       e.preventDefault();
       dispatch(authActions.login());
    }
 
    return (
        <>
            <div className='mlml' style={{textAlign:'center'}}>
                <div className="loginContainer" style={{}}>
                <input name="username"/> <br/><br/>
                <input type="password" name="pwd"/><br/><br/>
                <button onClick={handleSubmit}> Login</button>
                </div>
            </div>
        </>
    )
    
};
export default Login;