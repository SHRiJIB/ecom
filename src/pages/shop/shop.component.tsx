import React, { FC } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOP_DATA } from './shop.data';

const Shop: FC = () => {

	

		return (
			<div className="shop-page">
				{SHOP_DATA.map(({ id ,title,items}) => (
					<CollectionPreview key={id} title={title} items={items}/>
				))}
			</div>
		);
	}
}

export default Shop;
