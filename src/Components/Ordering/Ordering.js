import { order_card, order } from '../../data/ordering';
import s from './Ordering.module.css';
import OrderOption from './../OrderOption/OrderOption';
import { NavLink } from 'react-router-dom';

const Ordering = () => {
	return (
		<section className={s.ordering}>
			<div className="container">
				<div className={s.wrapper}>
					<img src={order_card.image} alt={order_card.alt} />
					<div className={s.inner}>
						<h3 className={s.title}>{order.title}</h3>
						<p className={s.description}>{order.text}</p>
						<ul className={s.option_list}>
							{order.options.map((el, index) => (
								<OrderOption key={index} {...el} />
							))}
						</ul>
						<div className={s.apps}>
							<NavLink className={s.link} to="#">
								<img
									src={order.google_store}
									alt={`icon ${order.google_store}`}
								/>
							</NavLink>
							<NavLink className={s.link} to="#">
								<img
									src={order.apple_store}
									alt={`icon ${order.apple_store}`}
								/>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Ordering;
