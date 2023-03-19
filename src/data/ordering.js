import google_app from './media/ordering/google_app.png';
import apple_app from './media/ordering/apple_app.png';
import hand_img from './media/ordering/hand.png';
import cart_img from './media/ordering/cart.png';
import note_img from './media/ordering/note.png';
import card_img from './media/ordering/phone_app.png';

export const order = {
	title: 'Simple Way To Order Your Food',
	text: "Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.",
	options: [
		{
			title: 'Select Your Food',
			icon: hand_img,
		},
		{
			title: 'Add To Cart',
			icon: cart_img,
		},
		{
			title: 'Order Your Food',
			icon: note_img,
		},
	],
	google_store: google_app,
	apple_store: apple_app,
};

export const order_card = {
	image: card_img,
	alt: 'card order image',
};
