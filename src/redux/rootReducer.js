import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import login from './slices/loginSlice';
import registration from './slices/registrationSlice';
import cart from './slices/cartSlice';
import adminProducts from './slices/adminProducts';

const rootReducer = combineReducers({
  auth,
  login,
  registration,
  cart,
  adminProducts,
});

export default rootReducer;
