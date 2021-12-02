import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import login from './slices/loginSlice';
import registration from './slices/registrationSlice';
import cart from './slices/cartSlice';
import checkout from './slices/checkoutSlice';
import adminProducts from './slices/adminProducts';
import adminUsers from './slices/adminUsers';

const rootReducer = combineReducers({
  auth,
  login,
  registration,
  cart,
  checkout,
  adminProducts,
  adminUsers,
});

export default rootReducer;
