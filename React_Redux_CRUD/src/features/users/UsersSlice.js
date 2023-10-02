import {createSlice} from "@reduxjs/toolkit"

const initialState = [
    { id:"1", name:"Dave Patrick",email:"dave@gmail.com"},
    { id:"2", name:"Hunk Glugwein",email:"hunk@gmail.com"}
];

const UsersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload);
        },
        userUpdated(state, action) {
            const {id, name, email} = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if(existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        userDeleted(state, action){
           
            const {id} = action.payload;
            console.log(''+ id)
            const existingUser = state.find((user) => user.id === id);
           
            if(existingUser){
                return state.filter((user) => user.id !== id);
            }
        },
    },

});

export const { userAdded, userUpdated, userDeleted } = UsersSlice.actions;

export default UsersSlice.reducer;