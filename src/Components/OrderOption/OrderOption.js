import s from './OrderOption.module.css';

const OrderOption = ({ icon, title }) => {
	return (
		<li className={s.item}>
			<button className={s.image}>
				<img src={icon} alt={`icon ${title}`} />
			</button>
			<p>{title}</p>
		</li>
	);
};

export default OrderOption;
