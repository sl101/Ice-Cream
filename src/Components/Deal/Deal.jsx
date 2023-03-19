import Offer from '../Offer/Offer';
import s from './Deal.module.css';

const Deal = (props) => {
	const { image, alt } = props;
	return (
		<div className={s.deal} style={{ flexDirection: props.flex }}>
			<Offer {...props} />
			<div className={s.image}>
				<img className={s.img} src={image} alt={alt} />
			</div>
		</div>
	);
};

export default Deal;
