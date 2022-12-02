import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=5&offset=1';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
	};

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product, index) => (
					<ProductItem product={product} key={index} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
