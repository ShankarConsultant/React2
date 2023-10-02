import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userDeleted } from "./UsersSlice";

function UserList() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const deleteUser = (id) => {
        dispatch(userDeleted({id}));        
    }

    return (
        <div className="container">
            <div className="row">
                <br/><br/>
                <h5><b>Redux CRUD User App</b></h5>
            </div>
            <div className="row">
                {/* <div className="two columns">
                    <button className="button-primary">Load Users</button>
                </div> */}
                <div className="columns" style={{textAlign:'right'}}>
                <Link to={`add`}><button className="button-primary">Add User</button></Link>
                    <br/>  <br/>  <br/>
                    {/* <Link to={`add`}>Add</Link> */}
                </div>
            </div>
            <div className="row">
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>  <td>1</td> <td>Shankar Arunachalam</td><td>shan@gmail.com</td> <td><button>Delete</button>  <button>Edit</button> </td></tr> */}
                        {users.map(({ id, name, email}, i) => (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button onClick = {()=>deleteUser(id)}>Delete</button> &nbsp;&nbsp;
                                    <Link to={`edit-user/${id}`}><button>Edit</button> </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserList;