import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import stars from "../assets/rating_starts.png";
import white_plus from "../assets/add_icon_white.png";
import green_plus from "../assets/add_icon_green.png";
import remove from "../assets/remove_icon_red.png";

export function FoodItem({ item }) {
	const [cartItems, setCartItems] = useContext(CartContext);
	const existingProduct = cartItems.find((product) => product.id === item._id);

	function handleAddProduct() {
		const product = {
			id: item._id,
			image: item.image,
			title: item.name,
			price: item.price,
			quantity: 1,
		};
		if (existingProduct) {
			const updatedCart = cartItems.map((cartItem) => {
				return cartItem.id === item._id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem;
			});
			setCartItems(updatedCart);
		} else {
			setCartItems([...cartItems, product]);
		}
	}

	function handleRemoveFood() {
		if (existingProduct) {
			if (existingProduct.quantity > 1) {
				const updatedCart = cartItems.map((cartItem) => {
					return cartItem.id === item._id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem;
				});
				setCartItems(updatedCart);
			} else {
				const filteredCartItems = cartItems.filter(
					(cartItem) => cartItem.id !== item._id
				);
				setCartItems(filteredCartItems);
			}
		}
	}

	return (
		<div className="shadow w-[300px] sm:w-[350px] 2xl:w-auto">
			<div className="relative">
				<img src={item.image} alt={item.name} className="rounded-t-lg" />
				{existingProduct && existingProduct.quantity > 0 ? (
					<div className="absolute right-2 bottom-2 p-1 flex items-center gap-2 bg-white rounded-full">
						<img
							src={remove}
							alt="minus"
							onClick={handleRemoveFood}
							className="cursor-pointer"
						/>
						<p>{existingProduct.quantity}</p>
						<img
							src={green_plus}
							alt="plus"
							onClick={handleAddProduct}
							className="cursor-pointer"
						/>
					</div>
				) : (
					<img
						src={white_plus}
						alt="plus"
						className="absolute right-2 bottom-2 cursor-pointer"
						onClick={handleAddProduct}
					/>
				)}
			</div>
			<div className="p-5 h-[200px] flex flex-col justify-between">
				<div className="flex items-center justify-between mb-2">
					<h3 className="font-bold text-xl max-w-[100px]">{item.name}</h3>
					<img src={stars} alt="stars" />
				</div>
				<p className="text-gray-500 text-[15px] mb-3">{item.description}</p>
				<p className="text-orange-500 font-bold text-xl">${item.price}</p>
			</div>
		</div>
	);
}
