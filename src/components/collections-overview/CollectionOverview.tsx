import CollectionPreview from 'Components/collection-preview/collection-preview.component';
import React from 'react';
import { Collection } from 'Stores/shop/shop.selector';
import { ShopCollections } from 'Stores/shop/shop1.data';
import './styles.scss';

interface CollectionOverviewProps {
	collections: ShopCollections;
}
const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => {
	return (
		<div className="collections-overview">
			{Object.keys(collections).map((key) => () => {
				const { id, items, title } = collections[key as Collection];
				return <CollectionPreview key={id} title={title} items={items} />;
			})}
		</div>
	);
};

export default CollectionOverview;
