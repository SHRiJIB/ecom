import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { AuthState } from './auth/Auth.reducer';
import { CartState } from './cart/cart.reducer';
import rootReducer from './root-reducer';
import { UserState } from './user/user.reducer';

// const middleWares = [logger, thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export interface RootState {
	user: UserState;
	auth: AuthState;
	cart: CartState;
}
export type AppDispatch = typeof store.dispatch;
export default store;
