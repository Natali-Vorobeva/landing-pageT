import ButtonMore from '../ButtonMore/ButtonMore';
import chessplayer from '../../assets/images/chessplayer.png'
import './CardChessPlayer.scss';

function CardChessPlayer({ title, subtitle }) {

	return (
		<div className="chess-player">
			<div className="chess-player__image">
				<img className="chess-player__img" src={chessplayer} alt="Слайд" />
			</div>
			<h4 className="chess-player__title">{title}</h4>
			<p className="chess-player__subtitle">{subtitle}</p>
			<ButtonMore />
		</div>
	);
}

export default CardChessPlayer;