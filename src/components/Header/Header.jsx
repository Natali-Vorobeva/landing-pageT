import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Marquee from '../Marquee/Marquee'
import bg from '../../assets/images/bg-header.webp'
import bgMobile from '../../assets/images/bg-mobile-1.webp'

import './Header.scss'

function Header() {

	return (
		<>
		<header className="header">
			<picture>
				<source fetchpriority="high" srcSet={bgMobile} media="(max-width: 640px)" />
					<img fetchpriority="high" className="header__background" src={bg} alt="Фон" />
			</picture>
			<div className="container">
				<Logo />
				<div className="header__content">
					<div className="header__title">
						<p className="header__title-left">Превратите уездный&nbsp;город</p>
						<p className="header__title-center">в&nbsp;столицу</p>
						<p className="header__title-right">земного&nbsp;шара</p>
					</div>
					<p className="header__subtitle">Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>
				</div>
				<div className="header__buttons">
					<Button anchor="#lecture" style="button_style_black" btnText="Поддержать шахматную мысль" />
					<Button anchor="#session" style="button_style_white" btnText={"Подробнее о турнире"} />
				</div>
			</div>
		</header>
			<Marquee />
		</>
	);
}

export default Header;
