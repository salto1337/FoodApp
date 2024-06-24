import { scrollIntoSection } from "../utils/scrollIntoSection";
import hero_img from "../assets/header_img.webp";

export function Hero() {
	return (
		<main className="py-[50px]">
			<div className="relative">
				<img src={hero_img} alt="hero" />
				<div className="absolute left-3 top-0 sm:left-10 sm:top-10 md:top-20 md:left-20">
					<h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] text-white font-bold mb-5">
						Order your <br /> favourite food here
					</h1>
					<p className="hidden xl:block mb-8 max-w-[50%] text-white">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Reprehenderit, deleniti ducimus veritatis cupiditate ab, harum esse
						vitae est corporis deserunt sequi tempora doloremque alias ea
						consequatur repellat similique saepe iusto.
					</p>
					<button
						className="bg-white py-1 lg:py-3 px-8 rounded-[40px]"
						onClick={() => scrollIntoSection("products", "smooth")}>
						View Menu
					</button>
				</div>
			</div>
		</main>
	);
}
