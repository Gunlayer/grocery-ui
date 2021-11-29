import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../../components/adminPanel/dashboard/Dashboard';
import DashboardError from '../../../components/adminPanel/dashboard/DashboardError';
import PanelTitle from '../../../components/adminPanel/dashboard/PanelTitle';
import Spinner from '../../../components/common/Spinner';

const DashboardContainer = ({ setActive, active }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, seError] = useState('');
  const [data, setData] = useState({});

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setActive('dashboard');
  }, [setActive]);

  const getData = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/admin/dashboard',
        headers: { Authorization: token },
      });
      if (response.status === 200) {
        setIsLoading(false);
        setData(response.data);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          seError(err.response.data.message);
          setIsLoading(false);
        }
      }
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <PanelTitle title={'Dashboard'} icon={active} />
      {isLoading ? (
        <Spinner margin={'200px'} size={'100px'} />
      ) : error ? (
        <DashboardError error={error} />
      ) : (
        <Dashboard data={data} active={active} />
      )}
    </Box>
  );
};

export default DashboardContainer;