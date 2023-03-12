import s from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Logo = () => {
	return (
		<NavLink className={s.img_box} title="Polar ice cream brand" to="/">
			<img className={s.image} src={logo} alt="Polar ice cream brand logo" />
		</NavLink>
	);
};

export default Logo;
