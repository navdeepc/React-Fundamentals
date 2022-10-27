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

export default Button;
