import Marquee from '../Marquee/Marquee';
import './Footer.scss'

function Footer() {

return (
<footer className="footer">
	<Marquee />
	<div className="container">
		<p className="footer__text">Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта. С подробностями можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».</p>
	</div>
</footer>
);
}

export default Footer;