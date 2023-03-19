import s from './ConnectForm.module.css';
import AccentButton from './../AccentButton/AccentButton';

const ConnectForm = () => {
	return (
		<section className={s.connect}>
			<div className="container">
				<div className={s.wrapper}>
					<h2 className={s.title}>Have Question in Mind? Let us help you</h2>
					<form className={s.form}>
						<input
							className={s.input}
							type="text"
							placeholder="Enter your question"
						/>
						<AccentButton text="Send" section="connect_button" />
					</form>
				</div>
			</div>
		</section>
	);
};

export default ConnectForm;
