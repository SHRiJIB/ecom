import React, { FC } from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {}

const CustomButton: FC<CustomButtonProps> = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps} type="button">
		{children}
	</button>
);
export default CustomButton;
