import React, { FC } from 'react';
import './directory.styles.scss';
import { useAppSelector } from 'Stores/hook';
import { selectDirectorySections } from 'Stores/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

const Directory: FC = () => {
	const sections = useAppSelector(selectDirectorySections);
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

export default Directory;
