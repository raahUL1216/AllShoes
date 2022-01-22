import React from 'react';
import './shoe-list.css';

const ShoeList = () => {
	return (
		<div className='shoe-list'>
			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-header'>
					<div className='shoe-name'>Killer Bee</div>
					<div className='shoe-brand'>Adidas</div>
				</div>
				<div className='shoe-item-image'>
					<img src="/images/shoe1-1.jpeg"
						alt='shoe1-1' />
				</div>
				<div className='shoe-additional-info'>
					<div className='shoe-price-info'>
						<div className='price-title'>Price</div>
						<div className='price-value'>$120</div>
					</div>

					<div className='shoe-additional-images'>
						<img src="images/shoe1-2.jpeg" alt='shoe1-2' />
						<img src="images/shoe1-3.jpeg" alt='shoe1-3' />
					</div>
				</div>
			</div>

			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-item-image'></div>
				<div className='shoe-item-title'>Nike Air Max 1</div>
				<div className='shoe-item-price'>$120</div>
			</div>

			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-item-image'></div>
				<div className='shoe-item-title'>Nike Air Max 2</div>
				<div className='shoe-item-price'>$120</div>
			</div>

			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-item-image'></div>
				<div className='shoe-item-title'>Nike Air Max 4</div>
				<div className='shoe-item-price'>$120</div>
			</div>

			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-item-image'></div>
				<div className='shoe-item-title'>Nike Air Max 4</div>
				<div className='shoe-item-price'>$120</div>
			</div>

			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-item-image'></div>
				<div className='shoe-item-title'>Nike Air Max 4</div>
				<div className='shoe-item-price'>$120</div>
			</div>

			<div className='shoe-item' tabIndex={0}>
				<div className='shoe-item-image'></div>
				<div className='shoe-item-title'>Nike Air Max 4</div>
				<div className='shoe-item-price'>$120</div>
			</div>
		</div>
	);
};

export default ShoeList;
