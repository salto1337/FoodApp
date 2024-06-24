import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Logo() {
	return (
		<Link to="">
			<img src={logo} alt="logo" className="w-[100px] md:w-[173px]" />
		</Link>
	);
}
