import { createSelector } from 'reselect';
import { RootState } from 'Stores';
import memoize from 'lodash.memoize';
import { ShopCollectionInterface } from './shop1.data';

enum COLLECTION_ID_MAP {
	hats = 1,
	sneakers,
	jackets,
	womens,
	mens,
}

export type Collection = keyof typeof COLLECTION_ID_MAP;
const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectCollection = memoize((collectionUrlParam: Collection) =>
	createSelector([selectShopCollections], (collections): ShopCollectionInterface => {
		return collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]) as ShopCollectionInterface;
	})
);
