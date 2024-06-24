import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CenteredContent } from "../components/CenteredContent";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Login } from "../form/Login";
import { LoginContext } from "../contexts/loginContext";
import { createPortal } from "react-dom";
import { CartContext } from "../contexts/CartContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Layout() {
	const [isLogged, setIsLogged] = useLocalStorage("login", false);
	const [isFormShown, setIsFormShown] = useState(false);
	const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

	const login = createPortal(
		<Login onClose={() => setIsFormShown(false)} />,
		document.body
	);

	return (
		<>
			<LoginContext.Provider value={[isLogged, setIsLogged]}>
				<CartContext.Provider value={[cartItems, setCartItems]}>
					<CenteredContent>
						<Header setIsFormShown={setIsFormShown} />
						<Outlet />
					</CenteredContent>
					<Footer />
					{isFormShown && login}
				</CartContext.Provider>
			</LoginContext.Provider>
		</>
	);
}
