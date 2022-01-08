import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from 'Stores/shop/shop.selector';
import CollectionOverview from 'Components/collections-overview/CollectionOverview';
import { Route, useLocation } from 'react-router';
import CategoryPage from 'Screens/category/CategoryPage';

const Shop: FC = () => {
	const collections = useSelector(selectShopCollections);
	const location = useLocation();
	// console.log(location.pathname);
	return (
		<div className="shop-page">
			<Route
				exact
				path={location.pathname}
				component={() => <CollectionOverview collections={collections} />}
			/>
			<Route exact path={`${location.pathname}/:category`} component={CategoryPage} />
		</div>
	);
};

export default Shop;
