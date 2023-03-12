import { NavLink } from 'react-router-dom';
import s from './SocialMedia.module.css';
import facebook from './media/facebook.png';
import twitter from './media/twitter.png';
import instagram from './media/instagram.png';
import linkedin from './media/linkedin.png';

const SocialMedia = () => {
	return (
		<div className={s.media_wrapper}>
			<span className={s.media_title}>Follow Us</span>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink className={s.nav_link} to="#">
						<img className={s.image} src={facebook} alt="logo facebook" />
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={s.nav_link} to="#">
						<img className={s.image} src={twitter} alt="logo twitter" />
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={s.nav_link} to="#">
						<img className={s.image} src={instagram} alt="logo instagram" />
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={s.nav_link} to="#">
						<img className={s.image} src={linkedin} alt="logo linkedin" />
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SocialMedia;
