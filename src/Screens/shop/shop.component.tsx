import React, { FC } from 'react';
import { useAppSelector } from 'Stores/hook';
import { selectShopCollectionsForPreview } from 'Stores/shop/shop.selector';
import CollectionsOverview from 'Components/collections-overview/CollectionOverview';
import { Route, Routes } from 'react-router-dom';
import CollectionPage from 'Screens/collection/CollectionPage';

const Shop: FC = () => {
	const collections = useAppSelector(selectShopCollectionsForPreview);
	return (
		<div className="shop-page">
			<Routes>
				<Route index element={<CollectionsOverview collections={collections} />} />
				<Route path=":collection" element={<CollectionPage />} />
			</Routes>
		</div>
	);
};

export default Shop;
