import { useEffect } from 'react';

const Users = ({ setActive }) => {
  useEffect(() => {
    setActive('users');
  }, [setActive]);
  return <div>Users</div>;
};

export default Users;
