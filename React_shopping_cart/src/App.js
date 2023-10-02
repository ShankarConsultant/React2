import { useSelector, useDispatch } from 'react-redux';
//import {actions} from './store';
import Login from './Login';
import Cart from './Cart';

function App() {

  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);  //console.log(isLoggedIn)

 // let cartItems = useSelector((state) => state.cart.itemsList);
  //console.log(cartItems)

  return (
   <>
     {!isLoggedIn && <Login/>}
    {isLoggedIn && <Cart /> } 
   </>
  );
}

export default App;