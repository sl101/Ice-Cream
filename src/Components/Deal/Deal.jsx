import AccentButton from '../AccentButton/AccentButton';
import s from './Deal.module.css';

const Deal = ({ subtitle, title, text, substring, image, alt }) => {
	return (
		<div className={s.deal}>
			<div className={s.offer}>
				<p className={s.subtitle}>{subtitle}</p>
				{{ title } && <h1 className={s.title}>{title}</h1>}
				<p className={s.substring}>{substring}</p>
				<AccentButton section="deal_button" text={text} />
			</div>
			<div className={s.image}>
				<img className={s.img} src={image} alt={alt} />
			</div>
		</div>
	);
};

export default Deal;
