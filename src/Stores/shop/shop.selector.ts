import { createSelector } from 'reselect';
import { RootState } from 'Stores';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);
