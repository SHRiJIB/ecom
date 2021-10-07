import React, { FC } from 'react';
import CollectionItem from '../collection-item/collection-item.compoent';
import './collection-preview.styles.scss';

interface CollectionPreviewProps {
	title: string;
	items: {
		name: string;
		imageUrl: string;
		id: number;
		price: number;
	}[];
}

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<div className="title">{title.toUpperCase()}</div>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, imageUrl, name, price }) => (
						<CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
