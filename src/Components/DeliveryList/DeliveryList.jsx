import Delivery from '../Delivery/Delivery';
import s from './DeliveryList.module.css';

const DeliveryList = ({ delivery }) => {
	return (
		<section className={s.delivery}>
			<div className="container">
				<ul className={s.list}>
					{delivery.map((el, key) => (
						<Delivery {...el} key={key} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default DeliveryList;
