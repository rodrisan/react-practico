import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';

import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=5&offset=1';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product, index) => (
					<ProductItem product={product} key={`${index}${index}`} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
