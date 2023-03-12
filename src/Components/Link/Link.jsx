import { NavLink } from 'react-router-dom';
import s from './Link.module.css';

const Link = ({ title, url }) => {
	return (
		<li className={s.item}>
			<NavLink className={s.link} to={url}>
				{title}
			</NavLink>
		</li>
	);
};

export default Link;
