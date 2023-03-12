import s from './Footer.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SocialMedia from './../SocialMedia/SocialMedia';
import menu from '../../data/menu';
import Form from '../Form/Form';
import Payments from '../Payments/Payments';

const Footer = ({ nav }) => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.wrapper}>
					<Logo />
					<blockquote className={s.quote}>
						<p>
							Some food has looked so awful that it's looked like something that
							the dog's brought home.
						</p>
					</blockquote>
					<SocialMedia />
					<Navigation section="footer_nav" nav={nav} />
					<Navigation section="footer_menu" nav={menu} />
					<Form />
					<Payments />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
