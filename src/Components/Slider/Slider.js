import s from './Slider.module.css';
import { reviews, rew_nav } from './../../data/reviews';
import SlideItem from '../SlideItem/SlideItem';
import { useState } from 'react';

const Slider = () => {
	const [action, setAction] = useState('unactive');
	const avatarHandle = () => {
		// setAction('active');
	};

	return (
		<div className={s.slider}>
			<ul className={s.slider_wrapper}>
				{reviews.map((el, index) => (
					<SlideItem {...el} key={index} />
				))}
			</ul>
			<div className={s.navigation}>
				<button className={`${s.btn} ${s.btn_prev}`}>
					<img src={rew_nav.arrow} alt="icon arrow" />
				</button>
				<div className={s.pagination}>
					{reviews.map((el, index) => (
						<button
							className={`${s.avatar_btn} ${s[action]}`}
							// className={
							// action == 'active' ? `${s.avatar_btn} ${s[action]}` : s.avatar_btn
							// }
							key={index}
							onClick={avatarHandle}
						>
							<img
								className={s.avatar_img}
								src={el.avatar}
								alt={`Avatar ${el.full_name}`}
							/>
						</button>
					))}
				</div>

				<button className={`${s.btn} ${s.btn_next}`}>
					<img src={rew_nav.arrow} alt="icon arrow" />
				</button>
			</div>
		</div>
	);
};

export default Slider;
