import { CenteredContent } from "../components/CenteredContent";
import { Logo } from "../components/Logo";
import { FOOTER_COMPANY_LINKS } from "../constants/footer";
import { FOOTER_TOUCH } from "../constants/footer";
import facebook_icon from "../assets/facebook_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="bg-black/90 p-[100px]">
			<CenteredContent>
				<div className="grid grid-cols-1 gap-8 lg:flex lg:justify-between">
					<div>
						<Logo />
						<p className="mt-3 mb-3 max-w-[500px] text-white">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Molestias, ea nemo, quibusdam facere soluta ullam provident sequi
							doloribus quidem suscipit illum iusto? Incidunt itaque impedit
							ipsa reprehenderit officiis, autem rerum!
						</p>
						<div className="flex gap-4">
							<a href="">
								<img src={facebook_icon} alt="facebook" />
							</a>
							<a href="">
								<img src={twitter_icon} alt="facebook" />
							</a>
							<a href="">
								<img src={linkedin_icon} alt="facebook" />
							</a>
						</div>
					</div>
					{FOOTER_COMPANY_LINKS.map((links) => {
						return (
							<div key={links.title}>
								<h3 className="text-2xl uppercase text-white font-semibold mb-2">
									{links.title}
								</h3>
								<ul>
									{links.links.map((link) => {
										return (
											<li key={link.name} className="mb-2">
												<Link className="text-white" to={link.href}>
													{link.name}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
					{FOOTER_TOUCH.map((informations) => {
						return (
							<div key={informations.title}>
								<h3 className="text-2xl text-white uppercase font-semibold mb-2">
									{informations.title}
								</h3>
								{informations.info.map((item) => {
									return (
										<p key={item.name} className="text-white mb-2">
											{item.name}
										</p>
									);
								})}
							</div>
						);
					})}
				</div>
			</CenteredContent>
		</footer>
	);
}
