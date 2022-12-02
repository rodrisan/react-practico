import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = (props) => {
	const [cart, setCart] = useState([]);
	const { title, price, description, images } = props.product;
	const handleClick = () => {
		setCart([])
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
