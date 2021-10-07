import { combineReducers } from 'redux';
import { authReducer } from './auth/Auth.reducer';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

export default combineReducers({
	user: userReducer,
	auth: authReducer,
	cart: cartReducer,
});
