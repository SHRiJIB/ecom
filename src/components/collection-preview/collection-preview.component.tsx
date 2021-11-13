import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import CollectionItem from '../collection-item/collection-item.compoent';
import './collection-preview.styles.scss';

export interface Item {
	name: string;
	imageUrl: string;
	id: number;
	price: number;
}
interface CollectionPreviewProps {
	title: string;
	items: Item[];
}

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
	const dispatch = useDispatch();
	const addToCart = (item: Item) => {
		dispatch({ type: 'ADD_ITEM', payload: item });
	};
	return (
		<div className="collection-preview">
			<div className="title">{title.toUpperCase()}</div>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, imageUrl, name, price }) => (
						<CollectionItem
							key={id}
							name={name}
							imageUrl={imageUrl}
							price={price}
							id={id}
							addToCart={addToCart}
						/>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
