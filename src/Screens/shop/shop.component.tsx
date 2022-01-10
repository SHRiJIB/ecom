import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from 'Stores/shop/shop.selector';
import CollectionOverview from 'Components/collections-overview/CollectionOverview';
import { Route, useRouteMatch } from 'react-router';
import CategoryPage from 'Screens/category/CategoryPage';

const Shop: FC = () => {
	const collections = useSelector(selectShopCollections);
	const { path } = useRouteMatch();
	// console.log(location.pathname);
	return (
		<div className="shop-page">
			shop
			<Route exact path={path} component={() => <CollectionOverview collections={collections} />} />
			<Route path={`${path}/:category`} component={CategoryPage} />
		</div>
	);
};

export default Shop;
