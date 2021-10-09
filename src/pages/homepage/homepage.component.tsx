import React, { FC } from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage: FC = () => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default HomePage;