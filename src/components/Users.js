import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/users/userSlice";


const Users = () => {
    const dispatch = useDispatch();
    const {users, isLoading, error} = useSelector(state => state.users);
    console.log(users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(error !== undefined) {
        <div>
            <h2>Oops. Something went wrong, please try again!</h2>
            <p>{error}</p>
        </div>
    }


    return (
        <section>
            <h2>My users</h2>
            {users.map(user => (
                <div key={user.name.title}>
                    <p>{user.name.first} {user.name.last}</p>
                </div>            
             ))}
        </section>
    )
}

export default Users;