import play_store from "../assets/play_store.png";
import app_store from "../assets/app_store.png";

export function MobileSection() {
	return (
		<div className="flex flex-col items-center py-[100px]">
			<h3 className="capitalize max-w-[750px] text-center font-semibold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mb-10">
				For better experience download Tomato app
			</h3>
			<div className="flex gap-8">
				<a href="">
					<img src={play_store} alt="Play Store" />
				</a>
				<a href="">
					<img src={app_store} alt="App Store" />
				</a>
			</div>
		</div>
	);
}
