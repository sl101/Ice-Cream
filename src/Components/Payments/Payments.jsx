import { NavLink } from 'react-router-dom';
import s from './Payments.module.css';
import paypal from './media/paypal.png';
import mastercard from './media/mastercard.png';
import visa from './media/visa.png';

const Payments = () => {
	return (
		<ul className={s.list}>
			<li className={s.item}>
				<NavLink className={s.nav_link} to="#">
					<img className={s.image} src={paypal} alt="logo paypal" />
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink className={s.nav_link} to="#">
					<img className={s.image} src={mastercard} alt="logo mastercard" />
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink className={s.nav_link} to="#">
					<img className={s.image} src={visa} alt="logo visa" />
				</NavLink>
			</li>
		</ul>
	);
};

export default Payments;
