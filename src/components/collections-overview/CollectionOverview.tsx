import CollectionPreview from 'Components/collection-preview/collection-preview.component';
import React from 'react';
import { IShopCollection } from 'Stores/shop/shop1.data';
import './styles.scss';

interface CollectionOverviewProps {
	collections: IShopCollection[];
}
const CollectionsOverview: React.FC<CollectionOverviewProps> = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, items, title }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</div>
	);
};

export default CollectionsOverview;
