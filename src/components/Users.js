import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/users/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    <div>
      <h2>Oops. Something went wrong, please try again!</h2>
      <p>{error}</p>
    </div>;
  }

  return (
    <section>
      <h2>My users</h2>
      {users ? users.map((user) => (
        <div key={user.name.title}>
          <p>
            {user.name.first}
            {' '}
            {user.name.last}
          </p>
        </div>
      )) : <h3>No data</h3>}
    </section>
  );
};

export default Users;
