import { Link, NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../constants/navigation";
import { useContext, useState } from "react";
import { LoginContext } from "../contexts/loginContext";
import { CartContext } from "../contexts/CartContext";
import { BurgerButton } from "./BurgerButton";
import { MobileMenu } from "./MobileMenu";
import basket from "../assets/basket_icon.png";

export function Header({ setIsFormShown }) {
	const [isMenuShown, setIsMenuShown] = useState(false);
	const [isLogged, setIsLogged] = useContext(LoginContext);
	const [cartItems] = useContext(CartContext);

	function handleMenuToggle() {
		setIsMenuShown((prevState) => !prevState);
	}

	function handleLogin() {
		if (isLogged) {
			setIsLogged(false);
		} else {
			setIsFormShown(true);
		}
	}

	const cartItemsQuantity = cartItems.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	return (
		<header className="flex justify-between items-center py-3">
			<Logo />
			<nav>
				<ul className="hidden lg:flex gap-8">
					{NAV_LINKS.map((link) => {
						return (
							<li
								className="trainsition-all hover:text-orange-500"
								key={link.id}>
								<NavLink
									className={({ isActive }) =>
										isActive ? "border-b-2 pb-2 border-orange-500" : ""
									}
									to={link.href}>
									{link.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className="flex items-center gap-8">
				<div className="relative">
					<Link to="/basket">
						<img src={basket} alt="basket" />
						<span className="absolute -right-1 -bottom-3 flex items-center justify-center bg-red-500 w-[20px] h-[20px] text-white rounded-full">
							{cartItemsQuantity}
						</span>
					</Link>
				</div>

				<button
					className="border border-black py-2 px-8 rounded-[40px] transition-all hover:bg-orange-500 hover:text-white"
					onClick={handleLogin}>
					{isLogged ? "Sign out" : "Sign in"}
				</button>
			</div>
			<BurgerButton handleMenuToggle={handleMenuToggle} />
			<MobileMenu
				isMenuShown={isMenuShown}
				handleMenuToggle={handleMenuToggle}
			/>
		</header>
	);
}
