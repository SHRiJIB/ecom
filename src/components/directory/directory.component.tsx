import React, { FC } from 'react';
import { SECTIONS } from './directory.data.js';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory: FC = () => {
	return (
		<div className="directory-menu">
			{SECTIONS.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
