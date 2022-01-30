import React from 'react';
import './shoe-item.css';

const ShoeItem = (props) => {
	return (
		<div className='shoe-item'
			tabIndex={0}>

			{/* shoe title */}
			<div className='shoe-header'>
				<div className='shoe-name'>{props.shoe.name}</div>
				<div className='shoe-brand'>{props.shoe.brand}</div>
			</div>

			{/* shoe image */}
			<div className='shoe-item-image'>
				<img src={props.shoe.images.displayImage} alt={`${props.shoe.name}-displayImage`} />
			</div>

			{/* shoe price and additional images*/}
			<div className='shoe-additional-info'>
				<div className='shoe-price-info'>
					<div className='price-title'>Price</div>
					<div className='price-value'>
						{/* Rupee symbol is &#x20b9; */}
						<span>&#x20b9;</span>{props.shoe.price}
					</div>
				</div>
				<div className='shoe-additional-images'>
					{
						props.shoe.images.additionalImages.map((image, index) => {
							return (
								<img key={'additional-image-' + index}
									src={image}
									alt={`${props.shoe.name}-additional-${index}`} />
							)
						})
					}
				</div>
			</div>
		</div>
	);
};

export default ShoeItem;
