import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: { 
                        itemsList:[],
                        totalQuantity: 0,
                        showCart:false
                    },
    reducers : {
        addToCart(state, action) {
            const newItem = action.payload;            
            const existingItem = state.itemsList.find( (item) => item.id === newItem.id);

           // debugger;
            if(existingItem){
                existingItem.quantity++;
                //existingItem.price += newItem.price;
            } else {
                state.itemsList.push({                  
                    id:newItem.id,
                    prodname: newItem.prodname,
                    price: newItem.price,
                    //total: existingItem.price,
                    quantity: 1                   
                })
            }
         },
        removeFromCart(state, action) {
            const actionId = action.payload;
            
            let vv = state.itemsList;

            state.itemsList.map((itemVal) => console.log(itemVal.id));

            const isExistingItem = state.itemsList.find((item) => item.id === actionId.id);
            
           
            if(isExistingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item=>item.id!==actionId.id);
            } else {
                isExistingItem.quantity-- ;
                //isExistingItem.total -= isExistingItem.price;
            }

        },
        setShowCart(state) {
            state.showCart = !state.showCart;
         }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
