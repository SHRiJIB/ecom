import SHOP_DATA from './shop1.data';

const INITIAL_STATE = {
	collections: SHOP_DATA,
};

export type ShopState = typeof INITIAL_STATE;
export const shopReducer = (state = INITIAL_STATE, action: { type: string }): ShopState => {
	switch (action.type) {
		default:
			return state;
	}
};
