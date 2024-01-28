import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Marquee from '../Marquee/Marquee';
import './Header.scss'

function Header() {

	return (
		<header className="header">
			<div className="container">
				<Logo />
				<div className="header__content">
					<div className="header__title">
						<h2 className="header__title-left">Превратите уездный&nbsp;город</h2>
						<h2 className="header__title-center">в&nbsp;столицу</h2>
						<h2 className="header__title-right">земного&nbsp;шара</h2>
					</div>
					<p className="header__subtitle">Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>
					<div>
						<div className="header__buttons">
							<Button style="button_style_black" btnText="Поддержать шахматную мысль" />
							<Button style="button_style_white" btnText={"Подробнее о турнире"} />
						</div>
					</div>					
				</div>				
			</div>
			<Marquee />
		</header>
	);
}

export default Header;