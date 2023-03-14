import s from './ProductList.module.css';
import { products_nav } from '../../data/nav';
import { brown_bread } from '../../data/deals';
import { cayenne } from '../../data/deals';
import { chocolate } from '../../data/deals';
import Navigation from '../Navigation/Navigation';
import Deal from './../Deal/Deal';

const ProductList = () => {
	return (
		<section className={s.products}>
			<div className="container">
				<div className={s.wrapper}>
					<h2 className={s.title}>Our Product</h2>
					<Navigation section="products_nav" nav={products_nav} />
					<Deal {...brown_bread} />
					<Deal {...cayenne} />
					<Deal {...chocolate} />
				</div>
			</div>
		</section>
	);
};

export default ProductList;
