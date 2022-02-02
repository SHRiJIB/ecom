import { createSelector } from 'reselect';
import { RootState } from 'Stores';
import memoize from 'lodash.memoize';
import { IShopCollection } from './shop1.data';

enum COLLECTION_ID_MAP {
	hats,
	sneakers,
	jackets,
	womens,
	mens,
}

export type Collection = keyof typeof COLLECTION_ID_MAP;
const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);
export const selectShopCollectionsForPreview = createSelector([selectShopCollections], (collections) =>
	Object.keys(collections).map((key) => collections[key as Collection])
);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectCollection = memoize((collectionUrlParam: Collection) =>
	createSelector([selectShopCollections], (collections): IShopCollection => {
		return collections[collectionUrlParam];
	})
);
