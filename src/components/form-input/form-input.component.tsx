/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import './form-input.styles.scss';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	value: string;
}

const FormInput: FC<InputFieldProps> = ({
	id,
	handleChange,
	label,
	value,
	type,
	name,
	placeholder,
}) => (
	<div className="group">
		<input
			id={id}
			type={type}
			className="form-input"
			onChange={handleChange}
			value={value}
			name={name}
			placeholder={placeholder}
		/>
		{label ? (
			<label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
		) : null}
	</div>
);

export default FormInput;
