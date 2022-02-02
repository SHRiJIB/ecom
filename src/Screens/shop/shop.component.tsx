import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollectionsForPreview } from 'Stores/shop/shop.selector';
import CollectionsOverview from 'Components/collections-overview/CollectionOverview';
import { Route, useRouteMatch } from 'react-router';
import CollectionPage from 'Screens/collection/CollectionPage';

const Shop: FC = () => {
	const collections = useSelector(selectShopCollectionsForPreview);
	const { path } = useRouteMatch();
	// console.log(location.pathname);
	return (
		<div className="shop-page">
			shop
			<Route exact path={path} component={() => <CollectionsOverview collections={collections} />} />
			<Route path={`${path}/:collection`} component={CollectionPage} />
		</div>
	);
};

export default Shop;
