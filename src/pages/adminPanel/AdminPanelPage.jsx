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
import Products from '../../components/adminPanel/products/Products';
import Users from '../../components/adminPanel/users/Users';
import adminAvatar from '../../assets/admin_avatar.svg';
import { useState } from 'react';
import DashboardContainer from './dashboard/DashboardContainer';

const drawerWidth = 260;
const hover = {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
};

export default function PermanentDrawerLeft() {
  const [active, setActive] = useState('dashboard');

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
              padding: '6px',
            }}
          >
            <Box component="img" src={adminAvatar} width={50} />
            <Typography color="white">admin@endava.com</Typography>
          </Box>
          <List>
            <Link
              to="/admin/dashboard"
              style={{
                textDecoration: 'none',
                color: active === 'dashboard' ? '#444444' : 'white',
              }}
            >
              <ListItem
                button
                sx={{
                  backgroundColor: active === 'dashboard' ? 'white' : '#444444',
                  '&:hover': hover,
                }}
              >
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link
              to="/admin/products"
              style={{
                textDecoration: 'none',
                color: active === 'products' ? '#444444' : 'white',
              }}
            >
              <ListItem
                button
                sx={{
                  backgroundColor: active === 'products' ? 'white' : '#444444',
                  '&:hover': hover,
                }}
              >
                <ListItemText primary="Products" />
              </ListItem>
            </Link>
            <Link
              to="/admin/users"
              style={{
                textDecoration: 'none',
                color: active === 'users' ? '#444444' : 'white',
              }}
            >
              <ListItem
                button
                sx={{
                  backgroundColor: active === 'users' ? 'white' : '#444444',
                  '&:hover': hover,
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
              <DashboardContainer setActive={setActive} active={active} />
            </Route>
            <Route exact path="/admin/products">
              <Products setActive={setActive} active={active} />
            </Route>
            <Route exact path="/admin/users">
              <Users setActive={setActive} active={active} />
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