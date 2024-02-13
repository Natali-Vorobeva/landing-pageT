import plane from '../../assets/images/plane-640.png'

import './Plane.scss';

function Plane({ className }) {

	return (
			<div className={`${className}__plane`}>
				<img className={`${className}__image`} src={plane} alt="Самолёт" />
			</div>
	);
}

export default Plane;