import AccentButton from './../AccentButton/AccentButton';
import s from './HomePage.module.css';
import icecream from './media/icecream.png';

const HomePage = () => {
	return (
		<div className={s.homepage}>
			<div className="container">
				<div className={s.wrapper}>
					<div className={s.offer}>
						<p className={s.subtitle}>Sweet fun, full of milk.</p>
						<h1 className={s.title}>
							Feel inside cold with <br />
							our delicious <span>ice-cream.</span>
						</h1>
						<p className={s.substring}>
							Some food has looked so awful that it's looked like something that
							the dog's brought home, yet after one mouthful I've been left
							eating my thoughts, my words.
						</p>
						<AccentButton text="Buy Now" />
					</div>
					<div className={s.image}>
						<img
							className={s.img}
							src={icecream}
							alt="picture icecream in glass"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
