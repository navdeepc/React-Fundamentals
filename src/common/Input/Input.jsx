import React, { useState } from 'react';

export function Input(prop) {
	const [value, setValue] = useState('');
	function checkLabelText() {
		if (prop.labelText) {
			return (
				<label className={prop.labelClass} htmlFor={prop.id}>
					{prop.labelText}
				</label>
			);
		}
	}
	let input = (
		<>
			{checkLabelText()}
			<input
				id={prop.id}
				className={prop.class}
				placeholder={prop.placeholder}
				type={prop.type ? prop.type : 'text'}
				name={prop.name}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				minLength={prop.min ? prop.min : ''}
			/>
		</>
	);
	return [value, input, setValue];
}

export default Input;
