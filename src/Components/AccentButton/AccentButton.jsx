import s from './AccentButton.module.css';

const AccentButton = ({ section, text }) => {
	return (
		<button className={`${s.button} ${s[section]}`} type="button">
			{text}
		</button>
	);
};

export default AccentButton;
