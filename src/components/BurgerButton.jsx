export function BurgerButton({ handleMenuToggle }) {
	return (
		<div className="flex flex-col gap-1 lg:hidden" onClick={handleMenuToggle}>
			<div className="bg-black h-[2px] w-[20px]"></div>
			<div className="bg-black h-[2px] w-[20px]"></div>
			<div className="bg-black h-[2px] w-[20px]"></div>
		</div>
	);
}
