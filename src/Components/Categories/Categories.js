import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [
	{ name: 'Lenovo', category: 'laptop' },
	{ name: 'Asus', category: 'laptop' },
	{ name: 'Dell', category: 'laptop' },
	{ name: 'Samsung', category: 'mobile' },
	{ name: 'Nokia', category: 'phone' },
	{ name: 'Apple', category: 'mobile' },
	{ name: 'Canon', category: 'camera' },
	{ name: 'Nikon', category: 'camera' },
	{ name: 'Sony', category: 'television' }
];
const Categories = (props) => {
	const [ category ] = useContext(CategoryContext);
	const [ products, setProducts ] = useState([]);
	useEffect(
		() => {
			console.log({ category });
			const matchedProducts = allProducts.filter((pd) => pd.category === category.toLowerCase());
			setProducts(matchedProducts);
		},
		[ category ]
	);

	return (
		<div>
			<h3>Select your category:{category}</h3>
			{products.map((pd) => <CategoryDetails product={pd} />)}
		</div>
	);
};

export default Categories;
