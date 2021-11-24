import { useEffect } from 'react';

const Dashboard = ({ setActive }) => {
  useEffect(() => {
    setActive('dashboard');
  }, [setActive]);
  return <div>Dashboard</div>;
};

export default Dashboard;
