import { useEffect } from 'react';

const UsersContainer = ({ setActive }) => {
  useEffect(() => {
    setActive('users');
  }, [setActive]);
  return <div>Users</div>;
};

export default UsersContainer;
