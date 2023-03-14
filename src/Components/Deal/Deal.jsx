import AccentButton from '../AccentButton/AccentButton';
import s from './Deal.module.css';

const Deal = ({
	flex,
	subtitle,
	title,
	text,
	substring,
	sale,
	price,
	image,
	alt,
}) => {
	return (
		<div className={s.deal} style={{ flexDirection: flex }}>
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
			<div className={s.image}>
				<img className={s.img} src={image} alt={alt} />
			</div>
		</div>
	);
};

export default Deal;
