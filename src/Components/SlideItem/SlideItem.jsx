import s from './SlideItem.module.css';
const SlideItem = ({ full_name, nationality, quote, avatar }) => {
	return (
		<li className={s.slide}>
			<div className={s.inner}>
				<img src={avatar} alt={`Avatar ${full_name}`} />
				<div className={s.name}>
					{full_name}
					<span>{nationality}</span>
				</div>
			</div>
			<blockquote className={s.blockquote}>{quote}</blockquote>
		</li>
	);
};

export default SlideItem;
