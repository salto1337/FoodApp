import { useSearchParams } from "react-router-dom";
import { scrollIntoSection } from "../utils/scrollIntoSection";

export function Pagination({
	number,
	setLoading,
	category,
	setCategory,
	setPage,
}) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = searchParams.get("page");

	function handleChange(number) {
		setLoading(true);
		setSearchParams({ page: number });
		scrollIntoSection("products", "auto");
		setCategory("");
	}

	const pages = Array(number).fill(1);
	return (
		<ul className="flex gap-8">
			{pages.map((_, index) => {
				return (
					<li
						key={index}
						className={`cursor-pointer ${
							index === 0 && currentPage === null ? "font-bold text-[18px]" : ""
						} ${
							Number(currentPage) === index + 1 && category === ""
								? "font-bold text-[18px]"
								: ""
						}`}
						onClick={() => {
							handleChange(index + 1);
							setPage(index + 1);
						}}>
						{index + 1}
					</li>
				);
			})}
		</ul>
	);
}
