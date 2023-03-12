import s from './Delivery.module.css';

const Delivery = ({ title, description, img, alt }) => {
	return (
		<li className={s.item}>
			<img className={s.img} src={img} alt={alt} />
			<h2 className={s.title}>{title}</h2>
			<p className={s.description}>{description}</p>
		</li>
	);
};

export default Delivery;
