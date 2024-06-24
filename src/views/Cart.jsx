import { useContext } from "react";
import { CartItem } from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";
import { CART_MENU } from "../constants/cart";

export function Cart() {
	const [cartItems] = useContext(CartContext);
	return (
		<section className="min-h-[100vh]">
			<div className="grid grid-cols-mobile lg:grid-cols-dekstop pt-[50px]">
				{CART_MENU.map((menu) => {
					return <h3 key={menu.id}>{menu.name}</h3>;
				})}
			</div>
			<div>
				<div className="mt-5">
					{!cartItems.length ? (
						<p className="border-t-2 py-3">Cart is empty...</p>
					) : (
						cartItems.map((product) => {
							return <CartItem key={product.id} product={product} />;
						})
					)}
				</div>
			</div>
		</section>
	);
}
