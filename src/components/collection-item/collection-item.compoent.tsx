import React, { FC } from 'react';
import './collection-item.styles.scss';

interface CollectionItemProps {
	name: string;
	price: number;
	imageUrl: string;
}
const CollectionItem: FC<CollectionItemProps> = ({ name, price, imageUrl }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
	</div>
);

export default CollectionItem;
