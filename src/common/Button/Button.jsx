import PropTypes from 'prop-types';
export function Button(prop) {
	return (
		<button
			onClick={prop.click}
			className={prop.class}
			disabled={prop.disabled}
		>
			{prop.name}
		</button>
	);
}

Button.propTypes = {
	click: PropTypes.any,
	class: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
