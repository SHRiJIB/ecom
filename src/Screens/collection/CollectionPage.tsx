import CollectionItem from 'Components/collection-item/collection-item.compoent';
import CustomMuiButton from 'Components/custom-mui-button';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Collection, selectCollection } from 'Stores/shop/shop.selector';
import { IShopCollection } from 'Stores/shop/shop1.data';
import './collection.styles.scss';

const CollectionPage: React.FC = () => {
	const params: { collection: Collection } = useParams();
	const collection: IShopCollection = useSelector(selectCollection(params.collection));
	console.log(collection);
	const { title, items } = collection;

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} {...item} addToCart={() => {}} />
				))}
			</div>
			<CustomMuiButton variant="contained" size="large" disableRipple disableElevation>
				CATEGORY PAGE
			</CustomMuiButton>
		</div>
	);
};

export default CollectionPage;
