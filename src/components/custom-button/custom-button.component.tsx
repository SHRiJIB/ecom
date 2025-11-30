import React, { FC, ReactNode } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
	children: ReactNode;
	type: 'button' | 'submit' | 'reset' | undefined;
	inverted?: boolean;
	onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ children, inverted, type, ...otherProps }) => (
	<button
		className={`${inverted ? 'inverted' : ''} custom-button`}
		{...otherProps}
		// eslint-disable-next-line react/button-has-type
		type={type ?? 'button'}
	>
		{children}
	</button>
);
export default CustomButton;
