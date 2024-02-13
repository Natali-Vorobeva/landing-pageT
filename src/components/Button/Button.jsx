import './Button.scss'

function Button({ btnText, style, anchor }) {

	return (
		<a href={anchor} className={`button ${style}`}>
			{btnText}
		</a>
	);
}

export default Button;
