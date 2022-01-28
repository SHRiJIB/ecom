import CustomMuiButton from 'Components/custom-mui-button';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Collection, selectCollection } from 'Stores/shop/shop.selector';

const CollectionPage: React.FC = () => {
	const params: { collection: Collection } = useParams();
	const collection = useSelector(selectCollection(params.collection));
	console.log(collection);

	return (
		<div className="category">
			<CustomMuiButton variant="contained" size="large" disableRipple disableElevation>
				CATEGORY PAGE
			</CustomMuiButton>
		</div>
	);
};

export default CollectionPage;
