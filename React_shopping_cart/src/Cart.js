import { Link,useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';
import productdata from './productdata.json'
import { cartActions} from './store/cart-slice';

function Cart() {    //const navigate = useNavigate();
    let productsList = productdata.listOfProducts;
    const cartItems = useSelector((state) => state.cart.itemsList);
    console.log(cartItems)
    let showCart = useSelector((state) => state.cart.showCart);
    let itemsPriceTotal = cartItems.reduce(function(prev, current) {        return prev + +(current.quantity*current.price)    }, 0);
    let itemsCnt = cartItems.reduce(function(prev, current) {        return prev + +current.quantity    }, 0);
   
    const dispatch = useDispatch();
    const logoutFn = (e) => {    
       e.preventDefault();
       dispatch(authActions.logout());
    }

    const toggleCartInfo = (state) => {
        dispatch(cartActions.setShowCart());
    }

    const addToCartFn = (id, prodname, price) => {
        dispatch(cartActions.addToCart({  id, prodname, price }))
    }

    const incrementItem = (id) => {
        let getProductData = productsList.filter((prodId)=>prodId.id===id);
        const prodname = getProductData[0].prodName;
        const price = getProductData[0].prodPrice;
        dispatch(cartActions.addToCart({  id, prodname, price }))
    }

    
    const decrementItem = (id) => {
        dispatch(cartActions.removeFromCart({id}));
    }
    return (
        <>
            <div className=''>
               <div>
                    <div className ="rightSubHeading"><h5>Redux Shopping App</h5> </div>  
                    <div className ="leftSubHeading" onClick={toggleCartInfo}>   { itemsCnt > 0 && <span >Cart :  {itemsCnt} Items </span> }</div>      
                    <div className ="logOut" onClick={logoutFn}>   X </div>       
               </div>
         
                <div className="cart-container">
                    {productsList.map( val => (
                        <div className="boxRightSpace" key={val.prodName}>
                            <div className="txtCenter">  <img src={val.prodImg} className="imgSrc"/>   </div>
                            <div className="txtCenter">  {val.prodName}   </div>
                            <div className="txtCenter">  ${val.prodPrice} </div>
                            <div className="txtCenter addCartBtn" onClick={() => addToCartFn(val.id, val.prodName, val.prodPrice)}>       Add to Cart       </div>
                        </div>
                    ))}      
                </div>

                {showCart && <div style={{border:'1px solid #433219', borderRadius:4, margin: 10, padding: 5}}>
                    <h5>Your Cart</h5>   
                    <div className="showCartContainer" >

                        <div className="showCartDiv" style={{margin:'5px', fontWeight:'bold', background:'#c1bd75'}}>
                            <div className="inlineBlock" style={{width:'30%'}}> Name</div>
                            <div className="inlineBlock" style={{width:'16%'}}> Qty</div>
                            <div className="inlineBlock" style={{width:'16%'}}> Price </div>
                            <div className="inlineBlock" style={{width:'16%'}}> Total (Item wise) </div>
                            <div className="cartItemAddMinus">  </div>
                            <div className="cartItemAddMinus">  </div>
                        </div>

                        {cartItems.map((itemCart) => 
                        <div className="showCartDiv" key={itemCart.id} style={{margin:'5px'}}>
                            <div className="inlineBlock" style={{width:'31%'}}> {itemCart.prodname}</div>
                            <div className="inlineBlock" style={{width:'16%'}}> {itemCart.quantity}</div>
                            <div className="inlineBlock" style={{width:'16%'}}> ${itemCart.price} </div>
                            <div className="inlineBlock" style={{width:'16%'}}> ${itemCart.price * itemCart.quantity} </div>
                            <div className="cartItemAddMinus" onClick={() => decrementItem(itemCart.id)}> - </div>
                            <div className="cartItemAddMinus" onClick={() => incrementItem(itemCart.id)}> + </div>
                        </div> )}

                    </div>               
                
                </div> }

                <div style={{textAlign: 'right',marginTop:100,paddingRight:50}}>  Total : <b> ${itemsPriceTotal}</b> </div>
            </div>
        </>
    )
    
};
export default Cart;