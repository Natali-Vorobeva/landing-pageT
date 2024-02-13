import FlexItem from '../FlexItem/FlexItem'
import './FlexItems.scss';

function FlexItems({ offset, flexElements }) {
	return (
		<div className="flex-items"
			style={{
				transform: `translateX(${offset}%)`
			}}>
			{
				flexElements.map((item) => {
					return (
						<FlexItem
							key={item.id}
							numberOne={item.numberOne}
							numberTwo={item.numberTwo}
							textOne={item.textOne}
							textTwo={item.textTwo}
						/>
					)
				})
			}
		</div>
	);
}

export default FlexItems;
