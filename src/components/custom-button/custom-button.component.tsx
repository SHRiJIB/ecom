import React, { FC } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
	type: 'button' | 'submit' | 'reset' | undefined;
}

const CustomButton: FC<CustomButtonProps> = ({ children, type, ...otherProps }) => (
	// eslint-disable-next-line react/button-has-type
	<button className="custom-button" {...otherProps} type={type ?? 'button'}>
		{children}
	</button>
);
export default CustomButton;
