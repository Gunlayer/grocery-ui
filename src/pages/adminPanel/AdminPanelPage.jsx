import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Dashboard from '../../components/adminPanel/dashboard/Dashboard';
import Products from '../../components/adminPanel/products/Products';
import Users from '../../components/adminPanel/users/Users';
import adminAvatar from '../../assets/admin_avatar.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const drawerWidth = 260;

export default function PermanentDrawerLeft() {
  const [active, setActive] = useState('dashboard');
  const token = useSelector((state) => state.auth.token);

  const getData = async () => {
    const response = await axios({
      method: 'GET',
      url: '/api/admin',
      headers: { Authorization: token },
    });
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#444444',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: 2,
            }}
          >
            <Box component="img" src={adminAvatar} width={50} />
            <Typography>admin@endava.com</Typography>
          </Box>
          <List>
            <Link to="/admin/dashboard">
              <ListItem
                button
                sx={{
                  backgroundColor: active === 'dashboard' ? 'white' : '#444444',
                }}
              >
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/admin/products">
              <ListItem
                button
                sx={{
                  backgroundColor: active === 'products' ? 'white' : '#444444',
                }}
              >
                <ListItemText primary="Products" />
              </ListItem>
            </Link>
            <Link to="/admin/users">
              <ListItem
                button
                sx={{
                  backgroundColor: active === 'users' ? 'white' : '#444444',
                }}
              >
                <ListItemText primary="Users" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Box sx={{ flexGrow: 1 }}>
          <Switch>
            <Route exact path="/admin/dashboard">
              <Dashboard setActive={setActive} />
            </Route>
            <Route exact path="/admin/products">
              <Products setActive={setActive} />
            </Route>
            <Route exact path="/admin/users">
              <Users setActive={setActive} />
            </Route>
            <Route path="/admin">
              <Redirect to="/admin/dashboard" />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
