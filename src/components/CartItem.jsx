import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function CartItem({ product }) {
	const [cartItems, setCartItems] = useContext(CartContext);

	function handleRemoveproduct() {
		const existingProduct = cartItems.find(
			(cartItem) => cartItem.id === product.id
		);

		if (existingProduct) {
			if (existingProduct.quantity > 1) {
				const updatedCart = cartItems.map((cartItem) => {
					return cartItem.id === product.id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem;
				});
				setCartItems(updatedCart);
			} else {
				const filteredCartproducts = cartItems.filter(
					(cartItem) => cartItem.id !== product.id
				);
				setCartItems(filteredCartproducts);
			}
		}
	}

	return (
		<div className="grid grid-cols-mobile lg:grid-cols-dekstop border-t-2 border-500-gray py-3">
			<img className="w-[40px] md:w-[80px]" src={product.image} />
			<h3 className="font-bold">{product.title}</h3>
			<p className="font-semibold">${product.price}</p>
			<p>{product.quantity}</p>
			<p className="font-semibold">${product.quantity * product.price}</p>
			<button className="flex" onClick={handleRemoveproduct}>
				x
			</button>
		</div>
	);
}
