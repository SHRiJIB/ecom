import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { AuthState } from './auth/Auth.reducer';
import { CartState } from './cart/cart.reducer';
import rootReducer from './root-reducer';
import { UserState } from './user/user.reducer';
import { DirectoryState } from './directory/directory.reducer';
import { ShopState } from './shop/shop.reducer';

// const middleWares = [logger, thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const persistor = persistStore(store as unknown as Store<any, AnyAction>);
export interface RootState {
	user: UserState;
	auth: AuthState;
	cart: CartState;
	directory: DirectoryState;
	shop: ShopState;
}
export type AppDispatch = typeof store.dispatch;
export default store;
