import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from 'Stores/shop/shop.selector';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';

const Shop: FC = () => {
	const collections = useSelector(selectShopCollections);
	return (
		<div className="shop-page">
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</div>
	);
};

export default Shop;
