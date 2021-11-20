import { createSelector } from 'reselect';
import { RootState } from 'Stores';
import { UserState } from './user.reducer';

export const selectUser = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector([selectUser], (state) => state.currentUser);
