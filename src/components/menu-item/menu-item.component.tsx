/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import './menu-item.styles.scss';

interface MenuItemProps {
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
}
const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
	const history = useHistory();
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className={`menu-item ${size}`} onClick={() => history.push(`${linkUrl}`)}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
