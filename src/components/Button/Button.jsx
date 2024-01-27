import './Button.scss'

function Button({ btnText, style }) {

	return (
		<button className={`button ${style}`}>
			{btnText}
		</button>
	);
}

export default Button;