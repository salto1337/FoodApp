import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/navigation";
import x_icon from "../assets/x_icon.png";

export function MobileMenu({ isMenuShown, handleMenuToggle }) {
	return (
		<nav
			className={`fixed bg-white top-0 bottom-0 w-full h-[100vh] z-10 transition-all duration-300 ${
				isMenuShown ? "left-0" : "-left-full"
			}`}>
			<ul className="absolute left-1/2 -translate-x-1/2 top-10 pt-[50px]">
				{NAV_LINKS.map((link) => {
					return (
						<li
							key={link.id}
							className="text-xl mb-5"
							onClick={handleMenuToggle}>
							<Link to={link.href}>{link.title}</Link>
						</li>
					);
				})}
			</ul>
			<div className="absolute right-4 top-4">
				<img
					src={x_icon}
					alt="x"
					className="w-[30px]"
					onClick={handleMenuToggle}
				/>
			</div>
		</nav>
	);
}
