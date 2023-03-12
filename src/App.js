import './Reset.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { header_nav } from './data/nav';
import { footer_nav } from './data/nav';

function App() {
	return (
		<div className="app">
			<Header nav={header_nav} />
			<Main />
			<Footer nav={footer_nav} />
		</div>
	);
}

export default App;
