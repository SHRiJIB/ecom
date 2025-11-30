// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

// const middleWares = [logger, thunk];

export const store = configureStore({ reducer: rootReducer });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const persistor = persistStore(store as unknown as Store<any, AnyAction>);
// export interface RootState {
// 	user: UserStoreState;
// 	auth: AuthState;
// 	cart: CartState;
// 	directory: DirectoryState;
// 	shop: ShopState;
// }
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
