import CollectionPreview from 'Components/collection-preview/collection-preview.component';
import React from 'react';
import { ShopCollectionInterface } from 'Stores/shop/shop1.data';
import './styles.scss';

interface CollectionOverviewProps {
	collections: ShopCollectionInterface[];
}
const CollectionOverview: React.FC<CollectionOverviewProps> = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</div>
	);
};

export default CollectionOverview;
