import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import login from './slices/loginSlice';
import registration from './slices/registrationSlice';
import cart from './slices/cartSlice';

const rootReducer = combineReducers({
  auth,
  login,
  registration,
  cart,
});

export default rootReducer;
