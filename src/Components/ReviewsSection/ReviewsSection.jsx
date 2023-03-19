import s from './ReviewsSection.module.css';
import icecream_review from './media/icecream_review.png';
import Slider from '../Slider/Slider';

const ReviewsSection = () => {
	return (
		<section className={s.reviews}>
			<div className="container">
				<div className={s.inner}>
					<Slider />
					<img src={icecream_review} alt="Picture ice-cream" />
				</div>
			</div>
		</section>
	);
};

export default ReviewsSection;
