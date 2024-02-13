import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import bg from '../../assets/images/bg-header.png'
import bgMobile from '../../assets/images/bg-mobile.png'

import './Header.scss'

function Header() {

	return (
		<header className="header">
			<picture>
				<source srcSet={bgMobile} media="(max-width: 640px)" />
					<img  className="header__background" src={bg} alt="Фон" />
			</picture>			
			<div className="container">
				<Logo />
				<div className="header__content">
					<div className="header__title">
						<h2 className="header__title-left">Превратите уездный&nbsp;город</h2>
						<h2 className="header__title-center">в&nbsp;столицу</h2>
						<h2 className="header__title-right">земного&nbsp;шара</h2>
					</div>
					<p className="header__subtitle">Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>
				</div>
				<div className="header__buttons">
					<Button anchor="#lecture" style="button_style_black" btnText="Поддержать шахматную мысль" />
					<Button anchor="#session" style="button_style_white" btnText={"Подробнее о турнире"} />
				</div>
			</div>
		</header>
	);
}

export default Header;
