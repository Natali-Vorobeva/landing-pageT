import ButtonMore from '../ButtonMore/ButtonMore'

import './CardChessPlayer.scss';

function CardChessPlayer({ title, subtitle, image }) {

	return (
		<div className="chess-player">
			<div className="chess-player__image">
				<img className="chess-player__img" src={`https://raw.githubusercontent.com/Natali-Vorobeva/landing-pageT/main/public/images${image}`} alt={title} />
			</div>
			<h4 className="chess-player__title">{title}</h4>
			<p className="chess-player__subtitle">{subtitle}</p>
			<ButtonMore />
		</div>
	);
}

export default CardChessPlayer;