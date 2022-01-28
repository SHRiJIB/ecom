import CustomMuiButton from 'Components/custom-mui-button';
import React from 'react';

const CollectionPage: React.FC = () => {
	return (
		<div className="category">
			<CustomMuiButton variant="contained" size="large" disableRipple disableElevation>
				CATEGORY PAGE
			</CustomMuiButton>
		</div>
	);
};

export default CollectionPage;
