import AccentButton from '../AccentButton/AccentButton';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import s from './Header.module.css';

const Header = ({ nav }) => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.wrapper}>
					<Logo />
					<Navigation section="header_nav" nav={nav} />
					<AccentButton text="Buy Now" />
				</div>
			</div>
		</header>
	);
};

export default Header;
