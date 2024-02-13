import { ReactComponent as Arrow } from '../../assets/images/arrow.svg'
import Counter from '../Counter/Counter';

import './Navigation.scss';

function Navigation({
	className,
	width,
	counter,
	countMaxSlider,
	countMediumSlider,
	countSmallSlider,
	navigation,
	disabledButtonLeft,
	disabledButtonRight,
	clickLeft,
	clickRight,
	children
}) {

	let count = width <= 375 ? countSmallSlider : width <= 626 ? countMediumSlider : countMaxSlider

	return (
		<div className={`navigation ${className}`}>
			<button onClick={() => clickLeft()} className={`navigation__arrow navigation__arrow_left navigation__arrow_left_${disabledButtonLeft}`}><Arrow className="arrow-translate" /></button>
			{
				navigation && <div className="dots">
					{children}
				</div>
			}
			{counter && (
				<Counter count={count} />				
			)}

			<button onClick={() => clickRight()} className={`navigation__arrow navigation__arrow_right navigation__arrow_right_${disabledButtonRight}`}><Arrow /></button>
		</div>
	);
}

export default Navigation;
