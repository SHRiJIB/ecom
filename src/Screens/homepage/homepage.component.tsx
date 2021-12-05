import React, { FC } from 'react';
import './homepage.styles.scss';
import Directory from '../../Components/directory/directory.component';

const HomePage: FC = () => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default HomePage;
