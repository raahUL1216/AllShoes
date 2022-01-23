import React from 'react';
import ShoeItem from '../ShoeItem/ShoeItem';
import './shoe-list.css';

const ShoeList = (props) => {
	return (
		<div className='shoe-list'>
			{
				props.shoes.map((shoe, index) => {
					return (
						<ShoeItem
							key={index}
							shoe={shoe}
						/>
					);
				})
			}
		</div>
	);
};

export default ShoeList;
