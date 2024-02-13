import './Title.scss';

function Title({ title, span }) {

	return (
		<div className="title container">
			<p className='title__text'>{title}
				{span !== undefined ?
					<span className="title__span">{span}</span> :
					null
				}
			</p>
		</div>
	);
}

export default Title;