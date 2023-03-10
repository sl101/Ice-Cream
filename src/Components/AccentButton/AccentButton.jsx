import s from './AccentButton.module.css';

const AccentButton = ({ text }) => {
	return <button className={s.button}>{text}</button>;
};

export default AccentButton;
