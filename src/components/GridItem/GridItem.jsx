import './GridItem.scss'

function GridItem({ text, span, style }) {

	return (
		<div className="grid-item">
			<p className="grid-item__span">{span}</p>
			<p className={`grid-item__text grid-item__text${style}`}>{text}</p>
		</div>
	);
}

export default GridItem;
{/* <div className="gallery__item grid-item">
	<p className="gallery__span grid-item__span">{span}</p>
	<p className={`gallery__text grid-item__text grid-item__text${style} gallery__text${style}`}>{text}</p>
</div> */}