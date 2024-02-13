import GridItems from '../GridItems/GridItems';
import Plane from '../Plane/Plane';

import './GridGallery.scss';

function GridGallery() {

	return (
		<div className="grid-gallery">
			<Plane className="gallery" />
			<div className="container">
				<div className="grid-gallery__content">
					<GridItems />
				</div>
			</div>
		</div>
	);
}

export default GridGallery;