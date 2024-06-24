import { MobileSection } from "../components/MobileSection";
import hero_img from "../assets/header_img.webp";

export function Mobile() {
	return (
		<section className=" py-[50px]">
			<div className="relative">
				<img src={hero_img} alt="hero" />
				<div className="absolute left-3 top-0 sm:left-10 sm:top-10 md:top-20 md:left-20">
					<h2 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] text-white font-bold mb-5">
						Download our <br /> mobile app
					</h2>
				</div>
			</div>
			<MobileSection />
		</section>
	);
}
