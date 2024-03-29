import plane from '../../assets/images/plane-640.webp'

import './Plane.scss';

function Plane({ className }) {

	return (
			<div className={`${className}__plane`}>
				<img className={`${className}__image`} src={plane} loading="lazy" alt="Самолёт" />
			</div>
	);
}

export default Plane;