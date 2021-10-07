import React, { FC } from 'react';
import './avatar.styles.scss';

interface AvatarProps {
	imgUrl: string;
	name: string;
}
const Avatar: FC<AvatarProps> = ({ imgUrl, name = 'Name' }) => {
	return <div className="avatar">{imgUrl ? <img src={imgUrl} alt={name} /> : <span>{name[0].toUpperCase()}</span>}</div>;
};

export default Avatar;
