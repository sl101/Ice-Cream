import AccentButton from '../AccentButton/AccentButton';
import s from './Offer.module.css';

const Offer = ({ subtitle, title, text, substring, sale, price }) => {
	return (
		<div className={s.offer}>
			<p className={s.subtitle}>{subtitle}</p>
			{{ title } && <h1 className={s.title}>{title}</h1>}
			<p className={s.substring}>{substring}</p>
			{{ sale } && (
				<div className={s.price_box}>
					<span>{sale}</span>
					<s className={s.price}>{price}</s>
				</div>
			)}
			<AccentButton section="deal_button" text={text} />
		</div>
	);
};

export default Offer;
