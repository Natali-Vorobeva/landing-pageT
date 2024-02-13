// import { useState, useEffect } from 'react';
import './Dots.scss';

function Dots({ index, indexDouble, width, idx }) {

	return (
		<p className={`dots__dot  ${width > 674 && Math.round(indexDouble) == idx ? "active" : ""} ${Math.ceil(index) == idx ? "active" : ""}`}>•</p>
	);
}

export default Dots;