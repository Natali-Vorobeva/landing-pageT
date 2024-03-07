import lecture from '../../assets/images/lecture.webp';

import './BlockLecture.scss';

function BlockLecture({ width }) {

	return (
		<section id="lecture" className="block-lecture container">
			<div className="block-lecture__title">
				<h2 className="block-lecture__title-text">
					Чтобы поддержать Международный васюкинский турнир
					{
						width < 640 && (
							<div>
								<img className="block-lecture__img" src={lecture} alt="Играют в шахматы" />
							</div>
						)
					}
					<span> посетите лекцию на тему:</span>
					<font color="red"> «Плодотворная дебютная идея»</font>
				</h2>
			</div>
			{
				width >= 640 && (
					<div className="block-lecture__image">
						<img className="block-lecture__img" src={lecture} alt="Играют в шахматы" />
					</div>
				)
			}
		</section>
	);
}

export default BlockLecture;