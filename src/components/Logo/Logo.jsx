import logo from '../../assets/images/logo-horse.svg'
import './Logo.scss';

function Logo() {

	return (
		<div className="logo">
			<div className="logo__horses">
				<img src={logo} className="logo__horse" alt="Логотип" />
				<img src={logo} className="logo__horse" alt="Логотип" />
				<img src={logo} className="logo__horse" alt="Логотип" />
				<img src={logo} className="logo__horse" alt="Логотип" />
			</div>
			<h1 className="logo__name">Клуб четырех&nbsp;коней</h1>
		</div>
	);
}

export default Logo;