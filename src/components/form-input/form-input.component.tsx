/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import './form-input.styles.scss';

interface InputFieldProps {
	handleChange: () => void;
	label: string;
	value: string;
}

const FormInput: FC<InputFieldProps> = ({ handleChange, label, value }) => (
	<div className="group">
		<input type="text" className="form-input" onChange={handleChange} value={value} />
		{label ? <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
	</div>
);

export default FormInput;
