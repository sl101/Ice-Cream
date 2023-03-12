import Link from '../Link/Link';
import s from './Navigation.module.css';

const Navigation = ({ section, nav }) => {
	return (
		<nav className={`${s.nav} ${s[section]}`}>
			<ul className={s.nav_list}>
				{nav.map((el, key) => (
					<Link {...el} key={key} />
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
