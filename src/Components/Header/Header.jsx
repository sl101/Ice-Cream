import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from './logo.png';
import AccentButton from '../AccentButton/AccentButton';

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<img className={s.image} src={logo} alt="Polar ice cream brand logo" />
				<nav className={s.nav}>
					<ul className={s.nav_list}>
						<li className={s.nav_item}>
							<NavLink className={s.nav_link} to="/">
								Home
							</NavLink>
						</li>
						<li className={s.nav_item}>
							<NavLink className={s.nav_link} to="/">
								Product
							</NavLink>
						</li>
						<li className={s.nav_item}>
							<NavLink className={s.nav_link} to="#/">
								Pricing
							</NavLink>
						</li>
						<li className={s.nav_item}>
							<NavLink className={s.nav_link} to="#">
								Testimonials
							</NavLink>
						</li>
						<li className={s.nav_item}>
							<NavLink className={s.nav_link} to="#">
								Contact Us
							</NavLink>
						</li>
					</ul>
				</nav>
				<AccentButton text="Buy Now" />
			</div>
		</header>
	);
};

export default Header;
