import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { MainPage } from "./views/MainPage.jsx";
import { productLoader } from "./api/productLoader.js";
import { Cart } from "./views/Cart.jsx";
import { Contact } from "./views/Contact.jsx";
import { Mobile } from "./views/Mobile.jsx";

const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <MainPage />,
				loader: productLoader,
			},
			{
				path: "/mobile",
				element: <Mobile />,
			},
			{
				path: "/basket",
				element: <Cart />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
