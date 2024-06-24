export function MenuItem({ item, handleFilter, category }) {
	return (
		<div
			className="flex flex-col items-center gap-3 cursor-pointer"
			onClick={() => handleFilter(item.title)}>
			<img
				src={item.image}
				alt={item.title}
				className={`${
					category === item.title
						? "border-[3px] border-orange-500 rounded-full"
						: ""
				}`}
			/>
			<h3 className="font-semibold text-gray-500 text-[17px]">{item.title}</h3>
		</div>
	);
}
