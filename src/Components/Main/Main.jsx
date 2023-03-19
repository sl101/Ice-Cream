import DeliveryList from '../DeliveryList/DeliveryList';
import HomePage from '../HomePage/HomePage';
import { deliveries } from '../../data/deliveries';
import s from './Main.module.css';
import HotDeal from './../HotDeal/HotDeal';
import ProductList from '../ProductList/ProductList';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import ConnectForm from '../ConnectForm/ConnectForm';
import Ordering from '../Ordering/Ordering';

const Main = () => {
	return (
		<main className={s.main}>
			<HomePage />
			<DeliveryList delivery={deliveries} />
			<HotDeal />
			<ProductList />
			<ReviewsSection />
			<Ordering />
			<ConnectForm />
		</main>
	);
};

export default Main;
