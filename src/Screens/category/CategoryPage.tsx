import CustomMuiButton from 'Components/custom-mui-button';
import React from 'react';

const CategoryPage: React.FC = () => {
	return (
		<div className="category">
			<CustomMuiButton variant="contained" size="large" disableRipple disableElevation>
				CATEGORY PAGE
			</CustomMuiButton>
		</div>
	);
};

export default CategoryPage;
