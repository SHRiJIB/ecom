import { Item } from 'components/collection-preview/collection-preview.component';
import CustomButton from 'components/custom-button/custom-button.component';
import React, { FC } from 'react';
import './collection-item.styles.scss';

interface CollectionItemProps extends Item {
	addToCart: (item: Item) => void;
}
const CollectionItem: FC<CollectionItemProps> = ({ id, name, price, imageUrl, addToCart }) => {
	return (
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
			<CustomButton type="button" inverted onClick={() => addToCart({ id, name, imageUrl, price })}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
