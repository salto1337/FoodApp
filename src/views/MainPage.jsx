import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { MenuItem } from "../components/MenuItem";
import { FoodItem } from "../components/FoodItem";
import { MENU } from "../constants/menu";
import { MobileSection } from "../components/MobileSection";
import { Pagination } from "../components/Pagination";
import { fetchDataByCategory } from "../api/fetchDataByCategory";
import { BACK_END_URL } from "../constants/api";

export function MainPage() {
	const [data, setData] = useState([]);
	const [foodList, setFoodList] = useState([]);
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function productLoader() {
			try {
				const response = await fetch(`${BACK_END_URL}/food?page=${page}`);
				if (!response.ok) {
					throw new Error("Fetch failed");
				}

				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				console.error("Fetch error:", error);
				throw error;
			}
		}
		productLoader();
	}, [page]);

	async function handleFilter(category) {
		setCategory(category);
		setLoading(true);
		try {
			const productsFilteredByCategory = await fetchDataByCategory(category);
			setFoodList(productsFilteredByCategory);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	}

	useEffect(() => {
		if (data.items) {
			setFoodList(data.items);
		}
	}, [data]);

	return (
		<section>
			<Hero />
			<div className="border-b-2" id="product">
				<h2 className="font-bold text-2xl mb-3">Explore our menu</h2>
				<p className="text-gray-400 max-w-[400px]">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eius
					quam laborum nisi facere id.
				</p>
				<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:flex-row 2xl:flex 2xl:justify-between items-center gap-8  my-8">
					{MENU.map((item) => (
						<MenuItem
							key={item.id}
							item={item}
							handleFilter={handleFilter}
							category={category}
						/>
					))}
				</div>
			</div>
			{error && <span className="text-red-500 my-2">{error}</span>}
			<div className="mt-5" id="products">
				<h2 className="font-bold text-2xl mb-5">Top dishes near you</h2>
				{loading ? (
					<p>Loading...</p>
				) : (
					<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center 2xl:place-items-start gap-8 pt-3 pb-10">
						{foodList.map((item) => (
							<FoodItem key={item._id} item={item} />
						))}
					</div>
				)}
				<div className="flex justify-center">
					{!loading && (
						<Pagination
							number={data.totalPages}
							setLoading={setLoading}
							category={category}
							setCategory={setCategory}
							setPage={setPage}
						/>
					)}
				</div>
			</div>
			<MobileSection />
		</section>
	);
}
