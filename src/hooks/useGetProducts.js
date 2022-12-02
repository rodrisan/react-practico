import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
	};

    return products;
}

export default useGetProducts;