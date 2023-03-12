import AccentButton from '../AccentButton/AccentButton';
import s from './Form.module.css';
const Form = () => {
	return (
		<form action="#" className={s.form}>
			<label className={s.label}>
				<p>Newsletter</p>
				<input
					className={s.input}
					type="e-mail"
					name="email"
					placeholder="Your Email"
				/>
				<AccentButton section="form_button" text="Subscribe" />
			</label>
		</form>
	);
};

export default Form;
