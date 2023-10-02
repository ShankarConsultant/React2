import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {Provider} from "react-redux";
import store from './store';
import  UserList  from './features/users/UserList';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>    
            <Routes>
                <Route path="/"  element = {<UserList /> } exact={true} />
                <Route path = "add" element = {<AddUser />} />
                <Route path = "edit-user/:userId" element = {<EditUser />} />
            </Routes>      
        </Router> 
    </Provider>
  </React.StrictMode>
);

/*


start with   EditUser.jsx

/features/users/usersSlice





<Router>    
  <Routes>
    <Route path="/">                    <UserList />               </Route> 
    <Route path="/add-user">            <h1>Add user</h1>          </Route>
    <Route path="/edit-user">           <h1>Edit user</h1>          </Route>
  </Routes>      
</Router> 

      */