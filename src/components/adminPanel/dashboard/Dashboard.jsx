import { Typography, Box } from '@mui/material';
import Board from './Board.jsx';
import Chart from './Chart';
import newOrdersIcon from '../../../assets/dashboard/new_orders.svg';
import incompleteOrdersIcon from '../../../assets/dashboard/incomplete_orders.svg';
import userRegistrationIcon from '../../../assets/dashboard/user_registration.svg';
import uniqueVisitorsIcon from '../../../assets/dashboard/unique_visitor.svg';

const Dashboard = ({ data }) => {
  const {
    newUserRegistrations,
    uniqueUsers,
    newOrders,
    incompleteOrders,
    mostSoldrProducts,
  } = data;
  //  const sorted = mostSoldrProducts.sort((a, b) => a.quantity - b.quantity);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '15px 15px 0 15px',
        }}
      >
        <Board
          backgroundColor="#17a2b7"
          title="New Order"
          value={150}
          icon={newOrdersIcon}
        />
        <Board
          backgroundColor="#27a844"
          title="Incomplete Orders"
          value={39}
          icon={incompleteOrdersIcon}
        />
        <Board
          backgroundColor="#fec107"
          title="User Registrations"
          value={62}
          icon={userRegistrationIcon}
        />
        <Board
          backgroundColor="#dc3546"
          title="Unique Visitors"
          value={590}
          icon={uniqueVisitorsIcon}
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', marginTop: '15px' }}
        >
          Top 5 sold products of the week:
        </Typography>
        <Chart />
        <Box
          sx={{
            marginTop: '-20px',
            height: '50px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'block',
              position: 'absolute',
              height: 'inherit',
              width: '100%',
              backgroundColor: 'white',
              zIndex: 100,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
