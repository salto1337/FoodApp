import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { MenuItem } from "../components/MenuItem";
import { FoodItem } from "../components/FoodItem";
import { MENU } from "../constants/menu";
import { useLoaderData } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import { fetchDataByCategory } from "../api/fetchDataByCategory";
import { MobileSection } from "../components/MobileSection";

export function MainPage() {
	const data = useLoaderData();
	const [foodList, setFoodList] = useState([]);
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
		if (data) {
			setFoodList(data.items);
			setLoading(false);
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
			<div className="mt-5 min-h-[100vh]" id="products">
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
					<Pagination
						number={data.totalPages}
						setLoading={setLoading}
						category={category}
						setCategory={setCategory}
					/>
				</div>
			</div>
			<MobileSection />
		</section>
	);
}
