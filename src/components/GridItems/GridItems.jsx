import GridItem from '../GridItem/GridItem';
import { gridElements } from '../../constants/constants';

import './GridItems.scss';

function GridItems() {

	return (
		<div className="grid-items">
			{
				gridElements.map((item, index) => {
					let style
					index == 6 ? style = "_width_content" : ""
					return (
					< GridItem key={index} text={item.text} span={item.span} style={style} />
					)
				})
			}
		</div>
	);
}

export default GridItems;
