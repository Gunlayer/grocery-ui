import { combineReducers } from 'redux';
import auth from './slices/authSlice';
import login from './slices/loginSlice';
import registration from './slices/registrationSlice';

const rootReducer = combineReducers({
  auth,
  login,
  registration,
});

export default rootReducer;
