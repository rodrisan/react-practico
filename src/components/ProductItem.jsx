import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);
	const { title, price, images } = product;

	const handleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartIcon} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
