import Deal from '../Deal/Deal';
import { oatmea } from '../../data/deals';
import s from './HotDeal.module.css';

const HotDeal = () => {
	return (
		<section className={s.hotdeal}>
			<div className="container">
				<Deal {...oatmea} />
			</div>
		</section>
	);
};

export default HotDeal;
