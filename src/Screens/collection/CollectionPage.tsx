import CollectionItem from 'Components/collection-item/collection-item.compoent';
import React from 'react';
import { useAppSelector } from 'Stores/hook';
import { useParams } from 'react-router';
import { Collection, selectCollection } from 'Stores/shop/shop.selector';
import './collection.styles.scss';
import { IShopCollection } from 'Stores/shop/shop1.data';

const CollectionPage: React.FC = () => {
	const { collection } = useParams();
	const selectedCollection: IShopCollection = useAppSelector(
		selectCollection(collection as Collection)
	);
	const { title, items } = selectedCollection;

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} {...item} addToCart={() => {}} />
				))}
			</div>
		</div>
	);
};

export default CollectionPage;
