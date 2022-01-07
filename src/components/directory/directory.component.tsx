import React, { FC } from 'react';
import './directory.styles.scss';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from 'Stores/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

const Directory: FC = () => {
	const sections = useSelector(selectDirectorySections);
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
