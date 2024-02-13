import './FlexItem.scss'

function FlexItem({ numberOne, numberTwo, textOne, textTwo }) {

	return (
		<div className="flex-item">
			<p className="flex-item__text">
				<span className="flex-item__span">{numberOne}</span>
				{textOne}
			</p>
			{
				numberTwo === '' ?
				null :
				<p className="flex-item__text">
				<span className="flex-item__span">{numberTwo}</span>
				{textTwo}
			</p>
			}
			
		</div>
	);
}

export default FlexItem;
