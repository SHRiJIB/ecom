import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from 'Stores/shop/shop.selector';
import CollectionOverview from 'Components/collections-overview/CollectionOverview';

const Shop: FC = () => {
	const collections = useSelector(selectShopCollections);
	return (
		<div className="shop-page">
			<CollectionOverview collections={collections} />
		</div>
	);
};

export default Shop;
