import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
	const { name } = props.product;
	return (
		<div>
			<h5>This is your CategoryDetails has</h5>
			<h6>Selected Products:{name}</h6>
		</div>
	);
};

export default CategoryDetails;
