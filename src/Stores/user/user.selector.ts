import { createSelector } from 'reselect';
import { RootState } from 'Stores';
import { UserStoreState } from './user.reducer';

export const selectUser = (state: RootState): UserStoreState => state.user;

export const selectCurrentUser = createSelector([selectUser], (state) => state.currentUser);
