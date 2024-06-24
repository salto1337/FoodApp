import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Logo() {
	return (
		<Link to="">
			<img className="w-[100px] md:w-[173px]" src={logo} alt="logo" />
		</Link>
	);
}
