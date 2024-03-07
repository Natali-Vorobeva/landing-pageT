import Table from '../Table/Table';
import session from '../../assets/images/session.webp'
import './BlockSession.scss';

function BlockSession({ width }) {

	return (
		<section id="session" className="block-session container">
			<div className="block-session__column-image">
				<img className="block-session__img" src={session} alt="Изображение шахматиста" />
			</div>
			<div className="block-session__column-table">
				<div className="block-session__table">
					<div className="block-session__title">
						<h2 className="block-session__title-text">
							и сеанс
							<font color="red"> одновременной игры в шахматы на 160 досках </font>
							гроссмейстера О. Бендера
						</h2>
					</div>
					<Table width={width} />
					<p className="block-session__blue-text">
						По всем вопросам обращаться в администрацию к К. Михельсону
					</p>
				</div>
			</div>
		</section>
	);
}

export default BlockSession;
