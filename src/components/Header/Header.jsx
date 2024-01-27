import Button from '../Button/Button';
import Logo from '../Logo/Logo';
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
			<marquee scrollamount="10" className="header__running-line">
					Дело помощи утопающим — дело рук самих утопающих! • Шахматы двигают вперед не только культуру, но и экономику! • Лед тронулся, господа присяжные заседатели!
				</marquee>
		</header>
	);
}

export default Header;